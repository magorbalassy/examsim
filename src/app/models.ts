export class Question {
  correct_ans : String;
  exam_nr : number;
  explanation : String;
  q_text : String;
  q_type : String;
  answers : string[] ;
};

export class GivenAnswers {
  answers : String[]=[];
  checked : Object={};

  constructor(question : Question) {
  }

}
//a
export class ExamFiles {
  examCode: string;
  examFile: string;
  questiasasons: string;
  examFileDesc: string;
}