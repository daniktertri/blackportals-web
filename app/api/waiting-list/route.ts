import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, surname, email } = body

    // Validate required fields
    if (!name || !surname || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: name, surname, and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Get environment variables
    const botToken = process.env.BOT_TOKEN
    let channelId = process.env.CHANNEL_ID

    if (!botToken || !channelId) {
      console.error('Missing environment variables: BOT_TOKEN or CHANNEL_ID')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Handle private channel ID format
    // Private channels need -100 prefix, public channels can use @username
    // If it's a numeric ID and doesn't start with -, prepend -100
    if (!channelId.startsWith('@') && !channelId.startsWith('-')) {
      channelId = `-100${channelId}`
    }

    // Format message for Telegram
    const message = `🎯 new waiting list member\n\n` +
      `👤 Name: ${name}\n` +
      `👤 Surname: ${surname}\n` +
      `📧 Email: ${email}`

    // Send message to Telegram channel
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: channelId,
        text: message,
      }),
    })

    const data = await response.json()

    console.log('Telegram API response status:', response.status)
    console.log('Telegram API response data:', JSON.stringify(data, null, 2))

    if (!response.ok || !data.ok) {
      console.error('Telegram API error:', {
        status: response.status,
        statusText: response.statusText,
        data: data
      })
      return NextResponse.json(
        { error: `Failed to send message to Telegram: ${data.description || 'Unknown error'}` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Successfully joined waiting list!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing waiting list submission:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined
    console.error('Error details:', { errorMessage, errorStack })
    return NextResponse.json(
      { error: `Internal server error: ${errorMessage}` },
      { status: 500 }
    )
  }
}

