const contacts = [
    {
        id: 1,
        name: 'Yoda',
        last_time_connection: 'Hace 2 horas',
        profile_picture: 'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&webp=true&resize=800,534',
        messages: [
            {
                id: 1,
                text: 'Hola, como estas?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Bien yo estoy',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            },
            {
                id: 3,
                text: 'Vamos de trekking?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:06:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'No puedo, tengo que cuidar a mis hijos',
                send_by_me: false,
                created_at: '2024-06-01T12:07:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        name: 'Pepe',
        last_time_connection: 'Hace 3 horas',
        profile_picture: 'https://www.clarin.com/img/2022/01/20/GWR2-6fo__1256x620__1.jpg',
        messages: [
            {
                id: 1,
                text: 'Holaaa',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Bien yo estoy',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 3,
        name: 'Martín',
        last_time_connection: 'Hace 2 horas',
        profile_picture: 'https://media.licdn.com/dms/image/v2/D4D03AQFn-dTV0DaG9w/profile-displayphoto-scale_200_200/B4DZxIdJ1uHAAY-/0/1770742133898?e=1773273600&v=beta&t=5CDCpDrtsY8ib2yHvQY8_np6Y5zAbYZiCR0WcSyoqpo',
        messages: [
            {
                id: 1,
                text: 'Fijate en la línea 50 del código',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'OK, ya lo cambio',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            },
            {
                id: 3,
                text: 'Vamos de trekking?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:06:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'No puedo, tengo que cuidar a mis hijos',
                send_by_me: false,
                created_at: '2024-06-01T12:07:00Z',
                is_read: false
            }
        ]
    }
]

export default contacts