// api/products.js – Vercel Serverless Function
// Conecta con Supabase para leer/crear productos

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    const isAdmin = req.query.admin === '1';
    let query = supabase
      .from('products')
      .select('*')
      .order('sort_order', { ascending: true });

    if (!isAdmin) {
      query = query.eq('active', true);
    }

    const { data, error } = await query;
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const body = req.body;
    const { data, error } = await supabase
      .from('products')
      .insert([{
        name: body.name,
        price: body.price || 0,
        category: body.category || 'otros',
        description: body.description || '',
        emoji: body.emoji || '🛍️',
        image_url: body.image_url || null,
        active: body.active !== false,
        sort_order: 9999,
      }])
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
