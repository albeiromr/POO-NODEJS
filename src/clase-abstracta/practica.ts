abstract class User {
  abstract id: string;

  abstract isActive: boolean;

  abstract genre: string;

  setStatus(newStatus: boolean) {
    this.isActive = newStatus;
  }
}

abstract class Tool {
  type: string;

  isFor: string;

  action: string;

  constructor(type: string, isFor: string, action: string) {
    this.type = type;
    this.isFor = isFor;
    this.action = action;
  }

  abstract isDangerous: boolean;

  abstract useTool(): string;

  changeTool() {
    console.log(`ya no necesito el/la${this.type}, necesito otra herramienta`);
  }
}

class BankUser extends User {
  id: string;

  isActive: boolean;

  genre: string;

  constructor(id: string, isActive: boolean, genre: string) {
    super();
    this.id = id;
    this.isActive = isActive;
    this.genre = genre;
  }
}

class BuildingTool extends Tool {
  isDangerous: boolean;

  constructor(type: string, isFor: string, action: string, dangerous: boolean) {
    super(type, isFor, action);
    this.isDangerous = dangerous;
  }

  useTool(): string {
    return `usando ${this.type}`;
  }
}

const alex = new BankUser("f4567", true, "masculino");
const destornillador = new BuildingTool("Destornillador", "destornillar", "destornillando", true);



