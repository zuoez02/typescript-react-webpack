// Remember to rename your file to Hello.tsx and
// place it within your src/ directory

import * as React from "react";

interface IHelloProps {
  name: string;
}

class Hello extends React.Component<IHelloProps, {}> {
  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

export default Hello;