const contacts = [
    {
        id: 1,
        name: 'Chuwaka',
        status: "Uuuur Aaaargggghhhhh",
        last_time_connection: '12:25 PM',
        profile_picture: 'https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/554319900_1466763377915507_5419813511984669955_n.jpg?ccb=11-4&oh=01_Q5Aa3wHVdT349xngaeZR-_kczjxkc2vYtprKyTdw5Mz3W-rSQQ&oe=69A73AD2&_nc_sid=5e03e0&_nc_cat=108',
        messages: [
            {
                id: 1,
                text: 'Hola Joaco, venís a almorzar?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, ma. Llego tarde de la facultad, no creo que alcance a llegar para el almuerzo',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            },
            {
                id: 3,
                text: 'Oka, te dejo un plato en la heladera entonces',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:06:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Dale, gracias! Después lavo los platos',
                send_by_me: false,
                created_at: '2024-06-01T12:07:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        name: 'Marcela',
        status: "En la playa",
        last_time_connection: 'Hace 3 horas',
        profile_picture: 'https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/584285139_1362926308870772_6139413910314663675_n.jpg?ccb=11-4&oh=01_Q5Aa3wF2joNVXbeb6gQ1BgIMf7eLf-DqeOCE78P2GwnnX_AqeQ&oe=69A74687&_nc_sid=5e03e0&_nc_cat=105',
        messages: [
            {
                id: 1,
                text: 'Holaaa. Pudiste ver los diseños que te mandé?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, no pude verlos todavía, estoy con mucho laburo. Te prometo que los veo esta noche',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 3,
        name: 'Martín',
        status: "Ocupado - meet",
        last_time_connection: '3:45 PM',
        profile_picture: 'https://media.licdn.com/dms/image/v2/D4D03AQFn-dTV0DaG9w/profile-displayphoto-scale_200_200/B4DZxIdJ1uHAAY-/0/1770742133898?e=1773273600&v=beta&t=5CDCpDrtsY8ib2yHvQY8_np6Y5zAbYZiCR0WcSyoqpo',
        messages: [
            {
                id: 1,
                text: 'Vos sabés que no logro encontrar el error en el código?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Fijate en la línea 50 del código',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            },
            {
                id: 3,
                text: 'Ahhhh, si si, ahí lo encontré, gracias!',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:06:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Avisame si necesitás que te ayude con algo más',
                send_by_me: false,
                created_at: '2024-06-01T12:07:00Z',
                is_read: false
            }
        ]
    }
]

export default contacts