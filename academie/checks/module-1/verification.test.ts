/** Module 1 : fiche et cadrage
 * Contrat détaillé dans academie/cours/module-1.md. */
import { describe, expect, it } from "vitest"
import { miseEnRoute, specification } from '../../../src/academie/module-1'
import { document, plain } from '../_support/documents'
describe('installation et cadrage',()=>{
 it('identifie un environnement renseigné',()=>{
  for(const value of [miseEnRoute.prenom,miseEnRoute.editeur]) {expect(value.trim().length).toBeGreaterThan(1);expect(plain(value)).not.toContain('a remplir')}
  expect(miseEnRoute.versionNode).toMatch(/^v?\d+\.\d+\.\d+$/);expect(Number(miseEnRoute.versionNode.replace(/^v/,'').split('.')[0])).toBeGreaterThanOrEqual(24)
 })
 it('cadre utilisateurs, courses et périmètre',()=>{
  const text=plain(document(specification.chemin));expect(text.replace(/^#.*$/gm,'').length).toBeGreaterThan(800)
  for(const term of ['probleme','utilisateur','fonctionnalite','course','chauffeur','passager','position','tarification','matching','paiement','deploiement'])expect(text).toContain(term)
  expect(text).not.toContain('a rediger')
 })
})
