export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { endpoint, params, baseUrl } = req.body;
    
    if (!endpoint) {
        return res.status(400).json({ error: 'Endpoint required' });
    }
    
    const apiBaseUrl = baseUrl || 'https://api.zenzxz.my.id';
    let targetUrl = `${apiBaseUrl}${endpoint}`;
    
    if (params && Object.keys(params).length) {
        targetUrl += `?${new URLSearchParams(params).toString()}`;
    }
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);
        
        const response = await fetch(targetUrl, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'image/*, application/json'
            }
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            return res.status(response.status).json({ error: `API Error: ${response.statusText}` });
        }
        
        const contentType = response.headers.get('content-type') || 'image/png';
        const buffer = await response.arrayBuffer();
        
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'no-cache');
        res.send(Buffer.from(buffer));
        
    } catch (err) {
        console.error('Proxy error:', err);
        res.status(500).json({ error: err.message });
    }
}