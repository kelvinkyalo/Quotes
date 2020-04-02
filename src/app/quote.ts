export class Quote {
    public showAuthor: boolean;
    constructor(public id: number,public name: string,public quoteby: string,public uploadby:string,public completeDate: Date) {
      this.showAuthor=false;
    }
  }
 