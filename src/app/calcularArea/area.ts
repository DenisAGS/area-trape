import { ValueConverter } from "@angular/compiler/src/render3/view/template";

export class area {

    result=0;
    a=undefined;
    b1=undefined;
    b2=undefined;
  

    calcular(a, b1,b2){

        /** 
         * Convertir de valores entrantes a decimales
        */
        if(a == (parseFloat(a))) a= parseFloat(a);
        if(b1 == (parseFloat(b1))) b1= parseFloat(b1);
        if(b2 == (parseFloat(b2))) b2= parseFloat(b2);
        
         /** 
         * Codigo que resuelve las pruebas
        */
        if(b1 === undefined && b2 === undefined  && a  === undefined) 
            return "Syntaxis error";
        
        if(b1 === undefined || b2 === undefined || a === undefined) 
            return "Syntaxis error";
        
        if(b1 === undefined && b2 === undefined || a === undefined) 
            return "Syntaxis error";
        
        if(b1 === undefined || b2 === undefined && a === undefined) 
            return "Syntaxis error";
        
        if(b1 === null && b2 === null && a === null) 
            return "Syntaxis error";
        
        if(b1 === null || b2 === null || a === null) 
            return "Syntaxis error";
        
        if(b1 === null && b2 === null || a === null) 
            return "Syntaxis error";
          
        if(b1 === null || b2 === null && a === null) 
            return "Syntaxis error";

        if(Math.sign(b1) === -1 && Math.sign(b2) === -1 && Math.sign(a) === -1)
            return "Datos erroneos";
            
        if(Math.sign(b1) === -1 || Math.sign(b2) === -1 || Math.sign(a) === -1)
            return "Datos erroneos";

        if(Math.sign(b1) === -1 && Math.sign(b2) === -1 || Math.sign(a) === -1)
            return "Datos erroneos";
          
        if(Math.sign(b1) === -1 || Math.sign(b2) === -1 && Math.sign(a) === -1)
            return "Datos erroneos";

        if(typeof (b1) !== "number" && typeof (b2) !== "number" && typeof (a) !== "number")
            return "Syntaxis error";

        if(typeof (b1) !== "number" || typeof (b2) !== "number" || typeof (a) !== "number")
            return "Syntaxis error";
        
        if(typeof (b1) !== "number" && typeof (b2) !== "number" || typeof (a) !== "number")
            return "Syntaxis error";
        
        if(typeof (b1) !== "number" || typeof (b2) !== "number" && typeof (a) !== "number")
            return "Syntaxis error";

        return this.result=a*(b1+b2)/2;
    }

}