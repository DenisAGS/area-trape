import { area } from './area';

describe('area', () => {
    let component: area;

    beforeEach(() => {
        component = new area();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    // #1
    it('should return "Syntaxis error" when "b1","b2" and "altura" are undefined', () => {
        expect(component.calcular(undefined,undefined, undefined)).toContain("Syntaxis error");  
    })
 
    // #2
    it('should return "Syntaxis error" when "b1"or "b2" or "altura" are undefined', () => {
        expect(component.calcular(6,undefined, undefined)).toContain("Syntaxis error");  
    })

    // #3
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are undefined', () => {
        expect(component.calcular(undefined,8, undefined)).toContain("Syntaxis error");  
    })

    // #4
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are undefined', () => {
        expect(component.calcular(undefined,undefined, 2)).toContain("Syntaxis error");  
    })

    // #5
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are undefined', () => {
        expect(component.calcular(6,4, undefined)).toContain("Syntaxis error");  
    })

    // #6
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are undefined', () => {
        expect(component.calcular(undefined,4, 2)).toContain("Syntaxis error");  
    })

    // #7
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are undefined', () => {
        expect(component.calcular(6,undefined, 8)).toContain("Syntaxis error");  
    })

    // #8
    it('should return "Syntaxis error" when "b1", "b2" and "altura" are null', () => {
        expect(component.calcular(null,null, null)).toContain("Syntaxis error");       
    });

    // #9
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are null', () => {
        expect(component.calcular(6,null, null)).toContain("Syntaxis error");       
    });

    // #10
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are null', () => {
        expect(component.calcular(null,8, null)).toContain("Syntaxis error");
    });
    
    // #11
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are null', () => {
        expect(component.calcular(null,null, 2)).toContain("Syntaxis error");       
    });

    // #12
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are null', () => {
        expect(component.calcular(4,null, null)).toContain("Syntaxis error");       
    });

    // #13
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are null', () => {
        expect(component.calcular(6,4, null)).toContain("Syntaxis error");       
    });

    // #14
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are null', () => {
        expect(component.calcular(null,6, 8)).toContain("Syntaxis error");       
    });

    // #15
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are null', () => {
        expect(component.calcular(6,null, 4)).toContain("Syntaxis error");       
    });

    // #16
    it('should return "Datos erroneos" when "b1", "b2" and "altura" are negative numbers', () => {
        expect(component.calcular(-3,-3, -3)).toContain("Datos erroneos");       
    });
    
    // #17
    it('should return "Datos erroneos" when "b1" or "b2" or "altura" are negative numbers', () => {
        expect(component.calcular(-3,-3, -3)).toContain("Datos erroneos");       
    });

    // #18
    it('should return "Datos erroneos" when "b1" or "b2" or "altura" are negative numbers', () => {
        expect(component.calcular(6,-3, -3)).toContain("Datos erroneos");       
    });

    // #19
    it('should return "Datos erroneos" when "b1" or "b2" or "altura" are negative numbers', () => {
        expect(component.calcular(-3,8, -3)).toContain("Datos erroneos");       
    });

    // #20
    it('should return "Datos erroneos" when "b1" or "b2" or "altura" are negative numbers', () => {
        expect(component.calcular(-3,-3, 2)).toContain("Datos erroneos");       
    });

    // #21
    it('should return "Datos erroneos" when "b1" or "b2" or "altura" are negative numbers', () => {
        expect(component.calcular(-3,6, 4)).toContain("Datos erroneos");       
    });

    // #22
    it('should return "Datos erroneos" when "b1" or "b2" or "altura" are negative numbers', () => {
        expect(component.calcular(6,8, -3)).toContain("Datos erroneos");       
    });

    // #23
    it('should return "Syntaxis error" when "b1", "b2" and "altura" are not a number', () => {
        expect(component.calcular("a","b", "c")).toContain("Syntaxis error");       
    });

    // #24
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are not a number', () => {
        expect(component.calcular(2,"b", "c")).toContain("Syntaxis error");       
    });

    // #25
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are not a number', () => {
        expect(component.calcular("a",4, "c")).toContain("Syntaxis error");       
    });

    // #26
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are not a number', () => {
        expect(component.calcular("a","b", 6)).toContain("Syntaxis error");       
    });

    // #27
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are not a number', () => {
        expect(component.calcular(2,4, "c")).toContain("Syntaxis error");       
    });

    // #28
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are not a number', () => {
        expect(component.calcular("a",4, 6)).toContain("Syntaxis error");       
    });

    // #29
    it('should return "Syntaxis error" when "b1" or "b2" or "altura" are not a number', () => {
        expect(component.calcular(2,"b", 6)).toContain("Syntaxis error");       
    });

    it('should return 20.9 when the values are 4.5, 5.2 and 1.3', () => {
        component.calcular(4.5,5.2,1.3);
        expect(component.calcular).toBe(14.6);
    });
})