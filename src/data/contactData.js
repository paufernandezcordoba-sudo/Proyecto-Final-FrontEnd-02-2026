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
    },
    {
        id: 5,
        name: 'Ceci',
        status: "Leyendo Kafka",
        last_time_connection: '17:25 PM',
        profile_picture: 'https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/596293973_1430605508727567_7561596948160667924_n.jpg?ccb=11-4&oh=01_Q5Aa3wFkZp3FwDln-2wArA1oQdCNuqqXe5NYESPUGX_Z4L_RtA&oe=69AA4FEE&_nc_sid=5e03e0&_nc_cat=110v',
        messages: [
            {
                id: 1,
                text: 'Hola amiga, cómo estás?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola nenaaaa, acá ando, leyendo un poco de Kafka. Vos?',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            },
            {
                id: 3,
                text: 'Qué lindo! Yo estoy viendo una serie nueva, me está encantando',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:06:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Dime cuál es, así la veo también!',
                send_by_me: false,
                created_at: '2024-06-01T12:07:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 6,
        name: 'Gabriela dentista',
        status: "Consultorio",
        last_time_connection: '17:05 PM',
        profile_picture: 'https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/597345452_1534108297666682_6097241335697495047_n.jpg?ccb=11-4&oh=01_Q5Aa3wHPrfJ9pIWbOOBlkf5s0egzJ4bQnn74KI46xrn1orIyAA&oe=69AA4ABF&_nc_sid=5e03e0&_nc_cat=106',
        messages: [
            {
                id: 1,
                text: 'Hola, tendrás un turno para esta semana?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, sí, tengo un turno el jueves a las 3 PM. Te lo dejo reservado?',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            },
            {
                id: 3,
                text: 'Sí, perfecto, gracias!',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:06:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Genial, te espero el jueves entonces',
                send_by_me: false,
                created_at: '2024-06-01T12:07:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 7,
        name: 'Silvia C.',
        status: "Senderismo en las sierras",
        last_time_connection: 'Hace 20 minutos',
        profile_picture: 'https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/549706892_847367681155441_1609132800081433350_n.jpg?ccb=11-4&oh=01_Q5Aa3wFsCWIwNzyjpg_sNECKdGrrs-QHXeX9MQWGExHvOB6kGw&oe=69AA4AD0&_nc_sid=5e03e0&_nc_cat=107',
        messages: [
            {
                id: 1,
                text: 'Cómo te fue en las sierras? Subiste alguna foto?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, estuvo buenísimo! Subí algunas fotos a Instagram, después te paso el link',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            },
            {
                id: 3,
                text: 'Qué bueno! Espero el link entonces',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                created_at: '2024-06-01T12:06:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Dale, te lo paso en un rato',
                send_by_me: false,
                created_at: '2024-06-01T12:07:00Z',
                is_read: false
            }
        ]
    },
]

export default contacts