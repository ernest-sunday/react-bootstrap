import React, { BreadcrumbItem } from "react-bootstrap";
import { Breadcrumb} from "react-bootstrap";

export function Bread() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="htttp://www.clacified.com">Home</BreadcrumbItem>
      <BreadcrumbItem href="https://clacified.com/sports">News</BreadcrumbItem>
      <BreadcrumbItem href="https://clacified.com/entertainment">Entertainment</BreadcrumbItem>
    </Breadcrumb>
  );
}

 