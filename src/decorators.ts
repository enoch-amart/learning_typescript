// parameterized decorators
type ComponentOptions = {
  selector: string;
};

// decorator Factory
function Component(value: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = value;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

@Component({ selector: "#my-profile" })
class ProfileComponent {}
