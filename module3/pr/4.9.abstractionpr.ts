{
  interface IAppliance {
    turnOn(): void;
    turnOff(): void;
  }
  class Fan implements IAppliance {
    turnOn(): void {
      console.log("the fan is now onn, circulating the air ");
    }
    turnOff(): void {
      console.log(`the fan is now, no fresh air`);
    }
  }
  class Light implements IAppliance {
    turnOn(): void {
      console.log(`light on, illuminating the tiny paradise`);
    }
    turnOff(): void {
      console.log(`light off, no fresh illumination`);
    }
  }
  console.log(Light);
  const ceilingFan = new Fan();
  const deskLamp = new Light();
  // ceilingFan.turnOff();
  // ceilingFan.turnOn();
  // console.log("[1;31mceilingFan in 4.9.abstractionpr.ts at line 24[0m");

  const operateAppliance = (appliance: IAppliance) => {
    appliance.turnOn();
    appliance.turnOff();
  };
  operateAppliance(ceilingFan);

  operateAppliance(deskLamp);
}
