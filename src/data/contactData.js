import { BiPhone } from "react-icons/bi";

export const contacts = [
    {
        id: 1,
        name: 'Chuwaka',
        status: "Uuuur Aaaargggghhhhh",
        last_time_connection: '12:25 PM',
        profile_picture: 'https://i.pinimg.com/736x/fe/9e/6b/fe9e6b7f9d5b4a0529982852bed8ad89.jpg',
        phone_number: '+54 9 351 555 4567',
        isUnread: false,
        isFavorite: true,
        messages: [
            {
                id: 1,
                text: 'Hola Joaco, venís a almorzar?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '12:03 PM',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, ma. Llego tarde de la facultad, no creo que alcance a llegar para el almuerzo',
                send_by_me: false,
                time: '12:05 PM',
                is_read: false
            },
            {
                id: 3,
                text: 'Oka, te dejo un plato en la heladera entonces',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '12:06 PM',
                is_read: true
            },
            {
                id: 4,
                text: 'Dale, gracias! Después lavo los platos',
                send_by_me: false,
                time: '12:07 PM',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        name: 'Marcela',
        status: "En la playa",
        last_time_connection: 'Hace 3 horas',
        profile_picture: 'https://i.pinimg.com/736x/dc/44/68/dc4468917339e0c8479834f6b5d83dfa.jpg',
        phone_number: '+54 9 351 366 6868',
        messages: [
            {
                id: 1,
                text: 'Holaaa. Pudiste ver los diseños que te mandé?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '10:00 AM',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, no pude verlos todavía, estoy con mucho laburo. Te prometo que los veo esta noche',
                send_by_me: false,
                time: '10:05 AM',
                is_read: false
            }
        ]
    },
    {
        id: 3,
        name: 'Martín',
        status: "Ocupado - meet",
        last_time_connection: '3:45 PM',
        profile_picture: 'https://i.pinimg.com/1200x/c6/d8/84/c6d8840cba420badf1713f3e9743730a.jpg',
        phone_number: '+54 9 351 456 7890',
        isUnread: true,
        isFavorite: true,
        messages: [
            {
                id: 1,
                text: 'Vos sabés que no logro encontrar el error en el código?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '12:00 PM',
                is_read: true
            },
            {
                id: 2,
                text: 'Fijate en la línea 50 del código',
                send_by_me: false,
                time: '12:05 PM',
                is_read: false
            },
            {
                id: 3,
                text: 'Ahhhh, si si, ahí lo encontré, gracias!',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '12:06 PM',
                is_read: true
            },
            {
                id: 4,
                text: 'Avisame si necesitás que te ayude con algo más',
                send_by_me: false,
                time: '12:07 PM',
                is_read: false
            }
        ]
    },
    {
        id: 5,
        name: 'Ceci',
        status: "Leyendo...",
        last_time_connection: '11:45 AM',
        profile_picture: 'https://i.pinimg.com/736x/41/4c/e1/414ce1db9b021d4d3d6508fc286f88f8.jpg',
        phone_number: '+54 9 351 123 4567',
        messages: [
            {
                id: 1,
                text: 'Hola amiga, cómo estás?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '10:00 AM',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola nenaaaa, acá ando, leyendo un poco de Kafka. Vos?',
                send_by_me: false,
                time: '10:05 AM',
                is_read: false
            },
            {
                id: 3,
                text: 'Qué lindo! Yo estoy viendo una serie nueva, me está encantando',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '10:06 AM',
                is_read: true
            },
            {
                id: 4,
                text: 'Dime cuál es, así la veo también!',
                send_by_me: false,
                time: '10:07 AM',
                is_read: false
            }
        ]
    },
    {
        id: 6,
        name: 'Gabriela dentista',
        status: "Consultorio",
        last_time_connection: '17:05 PM',
        profile_picture: 'https://i.pinimg.com/736x/6d/c0/fa/6dc0fa38b97cc6d476687a1f738f28d3.jpg',
        phone_number: '+54 9 351 322 4467',
        messages: [
            {
                id: 1,
                text: 'Hola, tendrás un turno para esta semana?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '10:34 AM',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, sí, tengo un turno el jueves a las 3 PM. Te lo dejo reservado?',
                send_by_me: false,
                time: '10:45 AM',
                is_read: false
            },
            {
                id: 3,
                text: 'Sí, perfecto, gracias!',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '10:50 AM',
                is_read: true
            },
            {
                id: 4,
                text: 'Genial, te espero el jueves entonces',
                send_by_me: false,
                time: '10:55 AM',
                is_read: false
            }
        ]
    },
    {
        id: 7,
        name: 'Silvia C.',
        status: "Senderismo en las sierras",
        last_time_connection: 'Hace 20 minutos',
        profile_picture: 'https://i.pinimg.com/736x/23/ad/8d/23ad8d55c706d4b60b3c35086dd68dd7.jpg',
        phone_number: '+54 9 351 633 4887',
        messages: [
            {
                id: 1,
                text: 'Cómo te fue en las sierras? Subiste alguna foto?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '12:00 PM',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, estuvo buenísimo! Subí algunas fotos a Instagram, después te paso el link',
                send_by_me: false,
                time: '12:05 PM',
                is_read: false
            },
            {
                id: 3,
                text: 'Qué bueno! Espero el link entonces',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '12:06 PM',
                is_read: true
            },
            {
                id: 4,
                text: 'Dale, te lo paso en un rato',
                send_by_me: false,
                time: '12:07 PM',
                is_read: false
            }
        ]
    },
    {
        id: 8,
        name: 'Felicia F.',
        status: "TROPEA - ITALIA",
        last_time_connection: '04:25 PM',
        profile_picture: 'https://i.pinimg.com/736x/e6/83/c1/e683c1b29dc99778b80fa071b74cbf2b.jpg',
        phone_number: '+39 9 351 678 5560',
        isUnread: true,
        isFavorite: true,
        messages: [
            {
                id: 1,
                text: 'Che bello. Quanto mi piacerebbe essere al carnevale venezuelano',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '10:00 AM',
                is_read: true
            },
            {
                id: 2,
                text: 'cara ,io faccio i dovuti controlli, x l\'intervento avuto nel 2024,il problema e\' Natale che era allettato,grazie al Cielo,ora e\' migliorato.',
                send_by_me: false,
                time: '10:05 AM',
                is_read: false
            },
            {
                id: 3,
                text: 'Un grande abbraccio',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '10:06 AM',
                is_read: true
            },
            {
                id: 4,
                text: 'Ti abbraccio di vero cuore, e grazie per il tuo affetto',
                send_by_me: false,
                time: '10:07 AM',
                is_read: false
            }
        ]
    },
    {
        id: 9,
        name: 'Marian',
        status: "Hola! Estoy usando WhatsApp",
        last_time_connection: 'Hace 35 minutos',
        profile_picture: 'https://i.pinimg.com/736x/19/fb/2d/19fb2db060fda96775fd5de6e19c558d.jpg',
        messages: [
            {
                id: 1,
                text: 'Hola Marian, sabés si ya llegó el paquete que te mandé?',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '01:09 PM',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, Pauli, sabés que no me llegó todavía, pero el número de seguimiento dice que ya está en la ciudad, así que espero que llegue hoy o mañana',
                send_by_me: false,
                time: '01:11 PM',
                is_read: false
            },
            {
                id: 3,
                text: 'Bueno, espero que llegue pronto! Avisame',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '01:13 PM',
                is_read: true
            },
            {
                id: 4,
                text: 'Dale, te aviso apenas llegue',
                send_by_me: false,
                time: '01:18 PM',
                is_read: false
            }
        ]
    },
    {
        id: 10,
        name: 'Irma vecina',
        status: "La vie est belle",
        last_time_connection: '04:25 PM',
        profile_picture: 'https://i.pinimg.com/1200x/1a/fc/36/1afc36212aaa0856be80e3753f046e37.jpg',
        phone_number: '+54 9 351 449 6567',
        isFavorite: true,
        messages: [
            {
                id: 1,
                text: 'Hola Irma, cómo estás? Te quería preguntar si tenés un poco de azúcar para prestarme',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '12:00 PM',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, Pauli, estoy bien, gracias por preguntar! Sí, tengo un poco de azúcar, te lo puedo llevar en un rato',
                send_by_me: false,
                time: '12:05 PM',
                is_read: false
            },
            {
                id: 3,
                text: 'Qué bueno! Gracias Irma, te lo agradezco mucho. Lo busco yo en un ratito, no te preocupes',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '12:06 PM',
                is_read: true
            },
            {
                id: 4,
                text: 'Dale, no hay problema, cualquier cosa avisame. Cómo está la Lolita?',
                send_by_me: false,
                time: '12:07 PM',
                is_read: false
            }
        ]
    },
    {
        id: 11,
        name: 'Rodri Molina',
        status: "Didactizador",
        last_time_connection: '10:06 AM',
        profile_picture: 'https://i.pinimg.com/736x/63/cc/05/63cc05d1ebeb61b33358d619e8d93f4b.jpg',
        messages: [
            {
                id: 1,
                text: 'Rodri, qué hacés',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '01:05 PM',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, Pauli, acá ando, trabajando un poco. Vos?',
                send_by_me: false,
                time: '01:07 PM',
                is_read: false
            },
            {
                id: 3,
                text: 'Qué bueno! Espero el link entonces',
                send_by_me: true, // true si el mensaje fue enviado por mi, false si el mensaje fue enviado por el contacto
                time: '01:09 PM',
                is_read: true
            },
            {
                id: 4,
                text: 'Dale, te lo paso en un rato',
                send_by_me: false,
                time: '01:23 PM',
                is_read: false
            }
        ]
    },
]

