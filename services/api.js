import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://quhfjroghplxwjtyxmag.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1aGZqcm9naHBseHdqdHl4bWFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0OTUzMjAsImV4cCI6MjA1MDA3MTMyMH0.z6FKnUsvU5160XizwGKsuIhHvCeo3aWIFQqZLPd9vbU';

export const supabase = createClient(supabaseUrl, supabaseKey);