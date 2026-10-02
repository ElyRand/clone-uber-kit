/** Module 3 : maquettes HTML
 * Contrat détaillé dans academie/cours/module-3.md. */
import { describe, expect, it } from "vitest"
import { maquettes } from '../../../src/academie/module-3'
import { document, plain } from '../_support/documents'
describe('maquettes',()=>{
 it('présente cinq tâches avec contenu et titre',()=>{
  for(const page of ['connexion','demande','suivi','chauffeur','recu']) {
   const html=document(maquettes[page]);expect(html).toMatch(/<h1[ >]/i);expect(html.replace(/<[^>]*>/g,'').trim().length).toBeGreaterThan(80)
  }
 })
 it('offre une demande par formulaire et une connexion étiquetée',()=>{
  const board=document(maquettes.demande);expect(board).toMatch(/<(button|select)[ >]/i);expect(plain(board)).toContain('demander')
  const login=document(maquettes.connexion);expect(login).toMatch(/<label[ >]/i);expect(login).toMatch(/type=['"]password['"]/i)
 })
})
