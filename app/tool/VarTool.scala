package tool

object VarTool {
  val adminStr  = "mole_pathology_admin"
  val userStr = "mole_pathology_user"
  val idStr = "mole_pathology_id"

  val dataHeaders = List(
    "Hugo_Symbol",
    "Entrez_Gene_Id",
    "Center",
    "NCBI_Build",
    "Chromosome",
    "Start_Position",
    "End_Position",
    "Strand",
    "Consequence",
    "Variant_Classification",
    "Variant_Type",
    "Reference_Allele",
    "Tumor_Seq_Allele1",
    "Tumor_Seq_Allele2",
    "dbSNP_RS",
    "dbSNP_Val_Status",
    "Tumor_Sample_Barcode",
    "Matched_Norm_Sample_Barcode",
    "Match_Norm_Seq_Allele1",
    "Match_Norm_Seq_Allele2",
    "Tumor_Validation_Allele1",
    "Tumor_Validation_Allele2",
    "Match_Norm_Validation_Allele1",
    "Match_Norm_Validation_Allele2",
    "Verification_Status",
    "Validation_Status",
    "Mutation_Status",
    "Sequencing_Phase",
    "Sequence_Source",
    "Validation_Method",
    "Score",
    "BAM_File",
    "Sequencer",
    "t_ref_count",
    "t_alt_count",
    "n_ref_count",
    "n_alt_count",
    "HGVSc",
    "HGVSp",
    "HGVSp_Short",
    "Transcript_ID",
    "RefSeq",
    "Protein_position",
    "Codons",
    "Hotspot",
    )

  val patientHeaders = List(
      "PATIENT_ID",
      "LYMPH_NODES_EXAMINED_POSITIVE",
      "NPI",
      "CELLULARITY",
      "CHEMOTHERAPY",
      "COHORT",
      "ER_IHC",
      "HER2_SNP6",
      "HORMONE_THERAPY",
      "INFERRED_MENOPAUSAL_STATE",
      "SEX",
      "INTCLUST",
      "AGE_AT_DIAGNOSIS",
      "OS_MONTHS",
      "OS_STATUS",
      "CLAUDIN_SUBTYPE",
      "THREEGENE",
      "VITAL_STATUS",
      "LATERALITY",
      "RADIO_THERAPY",
      "HISTOLOGICAL_SUBTYPE",
      "BREAST_SURGERY"
  )

  val sampleHeaders = List(
    "PATIENT_ID",
    "SAMPLE_ID",
    "CANCER_TYPE",
    "CANCER_TYPE_DETAILED",
    "ER_STATUS",
    "HER2_STATUS",
    "GRADE",
    "ONCOTREE_CODE",
    "PR_STATUS",
    "SAMPLE_TYPE",
    "TUMOR_STAGE"
  )

}
