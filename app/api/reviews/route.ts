import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Filter } from 'bad-words';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const filter = new Filter();

export async function GET() {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ reviews: data });
}

export async function POST(request: Request) {
  try {
    const { name, rating, message, course } = await request.json();

    if (!name || !rating || !message) {
      return NextResponse.json(
        { error: 'Name, rating, and message are required' },
        { status: 400 }
      );
    }

    if (filter.isProfane(name) || filter.isProfane(message)) {
      return NextResponse.json(
        { error: 'Your review contains inappropriate language and cannot be submitted.' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('reviews')
      .insert([{ name, rating, message, course: course || null }]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    );
  }
}