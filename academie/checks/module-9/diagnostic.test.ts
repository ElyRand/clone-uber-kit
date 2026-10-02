/** Module 9 : reproduction, cause et preuve du correctif concurrent. */
import { describe, expect, it } from 'vitest'
import { acceptRide, createRide, getRide, diagnostic } from '../../../src/academie/module-9'
import { document, plain } from '../_support/documents'
describe('diagnostic des doubles acceptations',()=>{
 it('garde un seul chauffeur parmi vingt-cinq tentatives',async()=>{
  const id=await createRide({passengerId:'diagnostic-passager',fareCents:1500})
  const candidates=Array.from({length:25},(_,i)=>'diagnostic-driver-'+i)
  const results=await Promise.all(candidates.map(driverId=>acceptRide({rideId:id,driverId})))
  const winners=results.map((result,i)=>({result,driverId:candidates[i]})).filter(x=>x.result.accepted)
  expect(winners).toHaveLength(1)
  const stored=await getRide(id);expect(stored.driverId).toBe(winners[0].driverId);expect(stored.status).toBe('ACCEPTED')
  expect((await acceptRide({rideId:id,driverId:'late-driver'})).accepted).toBe(false)
  expect((await getRide(id)).driverId).toBe(stored.driverId)
 })
 it('explique reproduction, transaction et limites',()=>{
  const text=plain(document(diagnostic.chemin));expect(text.length).toBeGreaterThan(650)
  for(const word of ['reproduction','concurrence','transaction','correctif','limite'])expect(text).toContain(word)
 })
})
