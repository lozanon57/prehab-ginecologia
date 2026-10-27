export interface Referencia {
  cita: string
  pmid: string
  tema: string
}

/** Fuentes verificadas en PubMed (octubre 2026). */
export const REFERENCIAS: Referencia[] = [
  { tema: 'ERAS ginecología', cita: 'Nelson G, et al. Enhanced recovery after surgery (ERAS®) society guidelines for gynecologic oncology: 2026 update. Gynecol Oncol. 2026.', pmid: '42247726' },
  { tema: 'ERAS ginecología', cita: 'Nelson G, et al. Guidelines for perioperative care in gynecologic/oncology: Enhanced Recovery After Surgery (ERAS) Society recommendations-2019 update. Int J Gynecol Cancer. 2019.', pmid: '30877144' },
  { tema: 'ERAS ginecología', cita: 'ACOG Committee Opinion No. 750: Perioperative Pathways: Enhanced Recovery After Surgery. Obstet Gynecol. 2018.', pmid: '30134426' },
  { tema: 'ERAS ginecología', cita: 'Stone R, et al. Enhanced Recovery and Surgical Optimization Protocol for Minimally Invasive Gynecologic Surgery: An AAGL White Paper. J Minim Invasive Gynecol. 2021.', pmid: '32827721' },
  { tema: 'ERAS ginecología', cita: 'Altman AD, et al. Guidelines for vulvar and vaginal surgery: Enhanced Recovery After Surgery Society recommendations. Am J Obstet Gynecol. 2020.', pmid: '32717257' },
  { tema: 'Mama', cita: 'Temple-Oberle C, et al. Consensus Review of Optimal Perioperative Care in Breast Reconstruction: Enhanced Recovery after Surgery (ERAS) Society Recommendations. Plast Reconstr Surg. 2017.', pmid: '28445352' },
  { tema: 'Mama', cita: 'McLaughlin SA, et al. Considerations for Clinicians in the Diagnosis, Prevention, and Treatment of Breast Cancer-Related Lymphedema: Recommendations from a Multidisciplinary Expert ASBrS Panel : Part 1: Definitions, Assessments, Education, and Future Directions. Ann Surg Oncol. 2017.', pmid: '28766232' },
  { tema: 'Mama', cita: 'McNeely ML, et al. Exercise interventions for upper-limb dysfunction due to breast cancer treatment. Cochrane Database Syst Rev. 2010.', pmid: '20556760' },
  { tema: 'Anemia y ayuno', cita: 'Muñoz M, et al. International consensus statement on the peri-operative management of anaemia and iron deficiency. Anaesthesia. 2017.', pmid: '27996086' },
  { tema: 'Anemia y ayuno', cita: 'Joshi GP, et al. 2023 American Society of Anesthesiologists Practice Guidelines for Preoperative Fasting: Carbohydrate-containing Clear Liquids with or without Protein, Chewing Gum, and Pediatric Fasting Duration-A Modular Update of the 2017 American Society of Anesthesiologists Practice Guidelines for Preoperative Fasting. Anesthesiology. 2023.', pmid: '36629465' },
  { tema: 'Trombosis', cita: 'Bergqvist D, et al. Duration of prophylaxis against venous thromboembolism with enoxaparin after surgery for cancer. N Engl J Med. 2002.', pmid: '11919306' },
  { tema: 'Trombosis', cita: 'Felder S, et al. Prolonged thromboprophylaxis with low molecular weight heparin for abdominal or pelvic surgery. Cochrane Database Syst Rev. 2019.', pmid: '31449321' },
  { tema: 'Recuperación', cita: 'Short V, et al. Chewing gum for postoperative recovery of gastrointestinal function. Cochrane Database Syst Rev. 2015.', pmid: '25914904' },
  { tema: 'Recuperación', cita: 'Kaloo P, et al. Interventions to reduce shoulder pain following gynaecological laparoscopic procedures. Cochrane Database Syst Rev. 2019.', pmid: '30699235' },
  { tema: 'Recuperación', cita: 'Vonk Noordegraaf A, et al. Multidisciplinary convalescence recommendations after gynaecological surgery: a modified Delphi method among experts. BJOG. 2011.', pmid: '21895950' },
  { tema: 'Oncología', cita: 'Ramirez PT, et al. Minimally Invasive versus Abdominal Radical Hysterectomy for Cervical Cancer. N Engl J Med. 2018.', pmid: '30380365' },
  { tema: 'Oncología', cita: 'Rossi EC, et al. A comparison of sentinel lymph node biopsy to lymphadenectomy for endometrial cancer staging (FIRES trial): a multicentre, prospective, cohort study. Lancet Oncol. 2017.', pmid: '28159465' },
  { tema: 'Miomas y endometriosis', cita: 'Margueritte F, et al. Time to conceive after myomectomy: should we advise a minimum time interval? A systematic review. Reprod Biomed Online. 2021.', pmid: '34353724' },
  { tema: 'Miomas y endometriosis', cita: 'Ginod P, et al. Do myomectomies alter third-trimester complications compared with women without myomectomies and uterine fibroids in situ: A retrospective cohort study of an American population database. Int J Gynaecol Obstet. 2025.', pmid: '40353825' },
  { tema: 'Miomas y endometriosis', cita: 'Becker CM, et al. ESHRE guideline: endometriosis. Hum Reprod Open. 2022.', pmid: '35350465' },
  { tema: 'Suelo pélvico', cita: 'Mueller MG, et al. Activity Restriction Recommendations and Outcomes After Reconstructive Pelvic Surgery: A Randomized Controlled Trial. Obstet Gynecol. 2017.', pmid: '28277355' },
  { tema: 'Suelo pélvico', cita: 'Cacheiro Bofarull A, et al. Postoperative Activity Restrictions After Reconstructive Pelvic Surgery. Urogynecology (Phila). 2025.', pmid: '39689229' },
  { tema: 'Suelo pélvico', cita: 'Shahid U, et al. Perioperative interventions in pelvic organ prolapse surgery. Cochrane Database Syst Rev. 2025.', pmid: '40693510' },
  { tema: 'Suelo pélvico', cita: 'Hagen S, et al. Individualised pelvic floor muscle training in women with pelvic organ prolapse (POPPY): a multicentre randomised controlled trial. Lancet. 2014.', pmid: '24290404' },
  { tema: 'Suelo pélvico', cita: 'Barber MD, et al. Comparison of 2 transvaginal surgical approaches and perioperative behavioral therapy for apical vaginal prolapse: the OPTIMAL randomized trial. JAMA. 2014.', pmid: '24618964' },
]
