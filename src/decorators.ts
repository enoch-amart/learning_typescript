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

function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

//Decorator Composition
@Component({ selector: "#my-profile" })
@Pipe
class ProfileComponent {}
