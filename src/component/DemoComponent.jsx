/** Functional Component */
/**
 *  JSX=> JAVASCRIPT AND XML
 *
 * JSX RULES
 *
 * 1.  JSX MUST HAVE ONE PARENT ELEMNT
 *
 * => Enclose your all tag with a div
 * => React.Fragment tag
 * => <></>
 * => JSX value should be either an expression or a quoted JSX text
 * => How to write expression in jsx=> put that expression inside {}
 * => Every tag whether it's self closing or not you have to close the tag
 *
 * <input/>
 *
 * Every component either a self closing or a tag
 *
 * React Component
 *
 * 1. Always first letter in capital=> camalcase
 * 2. Single Component=> File name should be similar to Functional Component name
 * 3. Always it's a default export
 *
 * 1. Default export => export default
 * 2. Named export => export const name="subho"
 *
 * 1. Default Import=> import DemoComponent from "./"
 * 2. Named import => import {name,class} from "."
 */

/**
 *
 * Folder structure conventions
 *
 * 1. Layout convention =>
 *
 * => Centralized Layout folder => to create the page structure
 * => Define Common things
 */

/**
 *
 * Layout=> index.jsx => export => import
 */

/**
 * 1. Functional compoent => 1. one return 1. one parameter => always in forms of object => props
 *
 * props=> parameter of functional component=> big object => pramater as a object form {name:"subhadeep",age:"20"}
 *
 * 1. parameter =>
 * 2. argument
 *
 * const name=(name,age)=>{
 *  console.log(name,age)
 * }
 *
 * name("Subho",20)
 */

/**
 *  How to write css
 *
 * 1. Inline
 *
 * 2. file-bsed => import =>
 *
 * import "./component.css"
 *
 * 3. styled component
 */

/**
 * inline style
 *
 * style => big object
 *
 * inline css =>
 *
 * 1. style => {}
 * 2. css object =>{}
 * 3. react internal css property => camalcase
 *
 * background-color => backgroundColor:
 * color=> color
 * font-weight=>fontWeight
 *
 * className
 *
 * 3. styled component
 *
 * 4. Children Props
 *
 *
 */

import "./component.css";
const DemoComponent = ({ name, age, children }) => {
  console.log(children);
  return (
    <>
      <span
        style={{ backgroundColor: "black", color: "white" }}
        className="span-text"
      >
        {name}
      </span>
      {children}
      {age + 20}
    </>
  );
};

export default DemoComponent;
