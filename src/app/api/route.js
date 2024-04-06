const { initializeDb } = require("@/lib/db");
import Todo from '@/lib/models';
import { NextResponse } from 'next/server'


const loadDB = () => {
  initializeDb();
}


export async function GET(request) {
  return NextResponse.json({ msg: 'Get Method Hit' }, { status: 500 })
}

export async function POST(request) {
  loadDB();
  const {title, description} = await request.json();
  await Todo.create({
    title,
    description  
  })
  return NextResponse.json({ msg: 'Todo Created' }, { status: 200 })
}

