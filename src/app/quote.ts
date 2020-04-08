export class Quote {
   showAuthor: boolean;
    constructor(public id: number,public name: string,public quoteby: string,public upvote: number,  public downvote: number ,public uploadby:string,public completeDate: Date) {
      this.showAuthor=false;
    }
  }
//  export class Quote{
//    id:number;
//    name:string;
//    quoteby:string;
//    uploadby:string;
//    upvote:number;
//    downvote:number;
//    completeDate:Date;
//  }