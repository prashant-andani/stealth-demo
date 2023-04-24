"use client"

import {useState, useEffect} from 'react';
import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import Add from "@/components/home/add";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import List from './list';
export default function Home() {
  
  const [allRecords, setAllRecords] = useState([]);
  const [recordId, setRecordId] = useState(0);

  const fetchAllRecords = async () => {
    let res = await fetch("/api/record", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    setAllRecords(await res.json());
  }

  useEffect(()=> {
    fetchAllRecords();
  }, [recordId]);

  const getComponent = (title) => {
    let component = {
      add: <Add onAddSuccess={(id)=> {console.log(id); setRecordId(id)} }/>,
      list: <List data={allRecords}/>
    }
    return component[title];
  };

  return (
      <div className="">
        {features.map(({ title, list, demo, large }) => (
          <Card
            key={title}
            title={""}
            demo={
              getComponent(title)
            }
            large={large}
          />
        ))}
      </div>
  );
}

const features = [
  {
    title: "add",
    large: true,
  },
  {
    title: "list",
    large: true,
  },
  
];


