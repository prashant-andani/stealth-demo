"use client"

import {useState, useEffect} from 'react';
import Card from "./card";
import Add from "./add";
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


  const getRecordCount = async () => {
    let res = await fetch("/api/record", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    setAllRecords(await res.json());
  }


  

  useEffect(()=> {
    fetchAllRecords();
  }, [recordId]);

  const getComponent = (title: number) => {
    let component = {
      1: <Add onAddSuccess={(id)=> {setRecordId(id); return ''} }/>,
      2: <List data={allRecords}/>
    }
    return component[title];
  };

  return (
      <div className="">
        {features.map(({ title, large }) => (
          <Card
            key={title}
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
    title: 1,
    large: true,
  },
  {
    title: 2,
    large: true,
  },
  
];


