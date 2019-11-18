import{Component} from'@angular/core';
@Component({
	selector:'iam',
	template:`<h1>{{a}}</h1><h4>{{b}}</h4><h1>{{c}}</h1>`
	
})
export class mynew
{
	a=10;
	b=20;
	c=this.a+this.b;
	
}