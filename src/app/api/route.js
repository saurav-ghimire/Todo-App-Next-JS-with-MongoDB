const { initializeDb } = require("@/lib/db");
import { NextResponse } from 'next/server'


const loadDB = () => {
  console.log(process.env.MONGO)
  initializeDb();
}

loadDB();

export async function GET(request) {
  return NextResponse.json({ msg: 'Get Method Hit' }, { status: 500 })
}

