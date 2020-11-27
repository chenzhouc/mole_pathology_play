package tool

object pojo {

  case class UserData(name: String, password: String)

  case class ChangePasswordData(password: String, newpassword: String)

  case class FileNameData(fileName: String)

  case class MyMessage(valid: Boolean, message: String)

  case class MyExcelTable(Hugo_Symbol: String, Entrez_Gene_Id: String, Center: String, NCBI_Build: String, Chromosome: String, Start_Position: String, End_Position: String, Strand: String, Consequence: String, Variant_Classification: String, Variant_Type: String,
                          Reference_Allele: String, Tumor_Seq_Allele1: String, Tumor_Seq_Allele2: String, dbSNP_RS: String, dbSNP_Val_Status: String, Tumor_Sample_Barcode: String, Matched_Norm_Sample_Barcode: String, Match_Norm_Seq_Allele1: String, Match_Norm_Seq_Allele2: String,
                          Tumor_Validation_Allele1: String, Tumor_Validation_Allele2: String, Match_Norm_Validation_Allele1: String, Match_Norm_Validation_Allele2: String, Verification_Status: String, Validation_Status: String, Mutation_Status: String
                          , Sequencing_Phase: String, Sequence_Source: String, Validation_Method: String, Score: String, BAM_File: String, Sequencer: String, t_ref_count: String, t_alt_count: String, n_ref_count: String,
                          n_alt_count: String, HGVSc: String, HGVSp: String, HGVSp_Short: String, Transcript_ID: String, RefSeq: String, Protein_position: String, Codons: String, Hotspot: String)

}
