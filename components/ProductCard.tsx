import React from "react";
import Image from "next/image";
import { CardFooter, Card, CardHeader, CardTitle } from "./ui/card";

const ProductCard = () => {
  return (
    <Card>
      <Image src="" alt="hard image" height={50} width={50} />
      <CardHeader>
        <CardTitle>Hard Title</CardTitle>
      </CardHeader>
      <CardFooter>
        <p>Hard Price</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
