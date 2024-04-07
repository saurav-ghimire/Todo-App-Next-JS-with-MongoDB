const { initializeDb } = require("@/lib/db");
import Todo from '@/lib/models';
import { NextResponse } from 'next/server'


const loadDB = () => {
  initializeDb();
}


export async function GET(request) {
  const allTodo = await Todo.find({});
  return NextResponse.json({ todos: allTodo }, { status: 200 })
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

export async function DELETE(request) {
  loadDB();
  const id  = await request.nextUrl.searchParams.get('id'); // Get id from URL parameter
  await Todo.findByIdAndDelete(id)
  return NextResponse.json({ msg: 'Todo Deleted' }, { status: 200 })
}

