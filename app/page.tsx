
import React from "react";
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/sections/header'))

export default function page() {


  return (

    <Header/>
  );
}
