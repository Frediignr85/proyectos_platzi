let anyVar: any;
anyVar = 1;
anyVar = true;
anyVar = undefined;
anyVar = "hola";
anyVar = [];
anyVar = {};
anyVar.docs();

let isNew: boolean = anyVar;

let unknowVar: unknown;
unknowVar = 1;
unknowVar = true;
unknowVar = undefined;
unknowVar = "hola";
unknowVar = [];
unknowVar = {};

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}
//unknowVar.toUpperCase();
