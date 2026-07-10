import { NextResponse } from 'next/server';
import { analyzeStartupIdea } from '@/lib/gemini';

export async function POST(request: Request) {
    try {
        const { idea } = await request.json();

        if (!idea || typeof idea !== 'string') {
            return NextResponse.json({ error: 'Invalid input. Please provide a valid startup idea.' }, { status: 400 });
        }

        const analysisResult = await analyzeStartupIdea(idea);

        return NextResponse.json(analysisResult);
    } catch (error) {
        return NextResponse.json({ error: 'An error occurred while analyzing the startup idea.' }, { status: 500 });
    }
}