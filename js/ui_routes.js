// Классы для цветов и игроков
class Color {
    constructor(value, name) {
        this.value = value;
        this.name = name;
    }
}

const blue = new Color('#03a9f4', 'синий');
const green = new Color('#8bc34a', 'зелёный');
const yellow = new Color('#cddc39', 'жёлтый');
const orange = new Color('#ff9800', 'оранжевый');

class Player {
    constructor(path, color, name) {
        this.path = path;
        this.color = color.value;
        this.name = `${name} (${color.name})`;
    }
}

class FirstPlayer extends Player {
    constructor(path, color = blue, name = 'Игрок 1') {
        super(path, color, name);
    }
}

class SecondPlayer extends Player {
    constructor(path, color = green, name = 'Игрок 2') {
        super(path, color, name);
    }
}

class ThirdPlayer extends Player {
    constructor(path, color = yellow, name = 'Игрок 3') {
        super(path, color, name);
    }
}

class Section {
    constructor(title, items = [], paths = []) {
        this.title = String(title);
        this.items = items;
        this.paths = paths;
    }
}

// Данные схем
const routeSections = [
    new Section(
        '1',
        [
            { players: 2, imgSrc: 'images/01.2.webp' },
            { players: 1, imgSrc: 'images/01.1.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,2,3,5,6'),
                    new SecondPlayer('1,2,4,7,6')
                ]
            },
            {
                playerPaths: [
                    new FirstPlayer('1,2,4,7,6', green)
                ]
            }
        ]
    ),
    new Section(
        '2',
        [
            { players: 2, imgSrc: 'images/02.2.webp' },
            { players: 1, imgSrc: 'images/02.1.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,3,6,9,8,5'),
                    new SecondPlayer('1,4,7,10,9,11')
                ]
            },
            {
                playerPaths: [
                    new FirstPlayer('1,4,7,10,9,11', green)
                ]
            }
        ]
    ),
    new Section(
        '3',
        [
            { players: 3, imgSrc: 'images/03.3.webp' },
            { players: 2, imgSrc: 'images/03.2.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,2,3,7,10,11'),
                    new SecondPlayer('1,5,6,9,11'),
                    new ThirdPlayer('1,4,12,13,11')
                ]
            },
            {
                playerPaths: [
                    new FirstPlayer('1,4,12,13,11', green),
                    new SecondPlayer('1,5,6,7,10,11', blue)
                ]
            }
        ]
    ),
    new Section(
        '4',
        [
            { players: 3, imgSrc: 'images/04.3.webp' },
            { players: 2, imgSrc: 'images/04.2.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,3,6,11,17,10,16,21,22,23'),
                    new SecondPlayer('1,2,4,7,18,8,12,19,22,23'),
                    new ThirdPlayer('1,5,24,25,9,14,13,20,22,23')
                ]
            },
            {
                playerPaths: [
                    new FirstPlayer('1,2,4,7,18,8,12,19,22,23', green),
                    new SecondPlayer('1,3,6,11,17,10,16,21,22,23', blue)
                ]
            }
        ]
    ),
    new Section(
        '5',
        [
            { players: 3, imgSrc: 'images/05.3.webp' },
            { players: 1, imgSrc: 'images/05.1.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,4,6,10,11,15,19,18,24'),
                    new SecondPlayer('1,5,9,10,14,17,20,27,25,21,24'),
                    new ThirdPlayer('1,2,7,8,12,16,23,26,25,21,24')
                ]
            },
            {
                playerPaths: [
                    new FirstPlayer('1,5,9,10,14,17,20,27,25,21,24', green)
                ]
            }
        ]
    ),
    new Section(
        '6',
        [
            { players: 3, imgSrc: 'images/06.3.webp' },
            { players: 2, imgSrc: 'images/06.2.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,3,6,9,12,15,18,21,26,25'),
                    new SecondPlayer('1,2,4,7,8,11,14,17,20,22,25'),
                    new ThirdPlayer('1,5,7,10,13,16,19,24,25')
                ]
            },
            {
                playerPaths: [
                    new FirstPlayer('1,2,4,7,8,11,14,17,20,22,24', green),
                    new SecondPlayer('1,3,6,9,12,15,18,21,26,25', blue)
                ]
            }
        ]
    ),
    new Section(
        '7',
        [
            { players: 3, imgSrc: 'images/07.3.webp' },
            { players: 2, imgSrc: 'images/07.2.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,7,3,4,5,9,16,18,23,22,26,27'),
                    new SecondPlayer('1,11,10,14,17,13,19,20,24,27'),
                    new ThirdPlayer('1,8,1,11,12,15,12,11,21,25,27')
                ]
            },
            {
                playerPaths: [
                    new FirstPlayer('1,7,1,11,10,14,17,13,19,20,24', green),
                    new SecondPlayer('1,8,1,11,21,25,27,26,22,23,18,16', blue)
                ]
            }
        ]
    ),
    new Section(
        '8',
        [
            { players: 3, imgSrc: 'images/08.3.webp' },
            { players: 2, imgSrc: 'images/08.2.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,3,4,8,7,9,11,15,19,20,22,23,31,22'),
                    new SecondPlayer('1,3,2,6,7,9,10,13,17,16,20,22,21,28,22'),
                    new ThirdPlayer('1,3,5,7,9,11,14,18,20,22,24,25,29,26,30,27')
                ]
            },
            {
                playerPaths: [
                    new FirstPlayer('1,3,2,6,7,9,10,13,17,16,20,22,21,28,29,26', green),
                    new SecondPlayer('1,3,4,8,7,9,11,15,19,20,22,23,31,30,26,32', blue)
                ]
            }
        ]
    ),
    new Section(
        '9',
        [
            { players: 3, imgSrc: 'images/09.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,3,8,12,11,7,16,21,26,30,31,32,35,37,40,45'),
                    new SecondPlayer('1,2,6,10,15,20,14,24,29,25,36,39,42,44,45'),
                    new ThirdPlayer('1,3,4,13,19,18,23,17,22,38,41,43,46,45')
                ]
            }
        ]
    ),
    new Section(
        'A 10',
        [
            { players: 3, imgSrc: 'images/10_alternate.webp' },
            { players: 3, imgSrc: 'images/10_alternate_2.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,3,2,6,11,17,25,30,35,34,29,24,21,17,12,7'),
                    new SecondPlayer('1,4,8,13,18,22,26,31,36,40,45,44,43,38,33,28', orange),
                    new ThirdPlayer('1,5,9,14', green)
                ]
            },
            {
                playerPaths: [
                    new FirstPlayer('1,3,2,6,11,17,25,30,35,34,29,24,21,17,12,7'),
                    new SecondPlayer('1,4,8,13,18,22,26,31,36,40,45,44,43,38,33,28', orange),
                    new ThirdPlayer('1,5,9,14,19,23,27,32,37,42,48,51,50,49,46,52', green)
                ]
            }
        ]
    ),
    new Section(
        'B 10',
        [
            { players: 3, imgSrc: 'images/10.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,4,8,13,18,22,26,31,36,40,46,45,39,33,28,20'),
                    new SecondPlayer('1,3,2,6,11,17,25,30,35,29,34,33,38,43,44,52'),
                    new ThirdPlayer('1,5,9,14,19,23,27,32,37,42,48,51,50,49,47,41')
                ]
            }
        ]
    ),
    new Section(
        'A 11',
        [
            { players: 3, imgSrc: 'images/11.3_alternate.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,2,3,6,7,12,11,15,21,27,36,39,40,41,37'),
                    new SecondPlayer('1,2,4,6,8,12,17,18,19,25,31,30,29,28,22,16', orange),
                    new ThirdPlayer('1,2,5,6,9,13,14,20,26,32,38,35,33,34,37', green)
                ]
            }
        ]
    ),
    new Section(
        'B 11',
        [
            { players: 3, imgSrc: 'images/11.3.webp' },
            { players: 3, imgSrc: 'images/11.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,2,5,6,10,13,14,20,26,32,38,35,33,34,37'),
                    new SecondPlayer('1,2,4,6,9,13,18,19,25,31,30,29,23,17,16,22'),
                    new ThirdPlayer('1,3,6,8,12,11,15,21,27,28,36,39,40,41,37')
                ]
            },
            {
                playerPaths: [
                    new FirstPlayer('1,2,4,6,9,13,18,19,25,31,30,29,28,22,16,17', green),
                    new SecondPlayer('1,2,3,6,8,12,11,15,21,27,36,34,33,35,37', blue),
                    new ThirdPlayer('1,2,5,6,10,13,14,20,26,32,38,41,40,39,37')
                ]
            }
        ]
    ),
    new Section(
        'A 12',
        [
            { players: 3, imgSrc: 'images/12.3_alternate.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,9,3,6,10,22,31,36,35,29,34,29,30,21,13'),
                    new SecondPlayer('1,5,12,15,28,20,12,14,26,18,19,20,27', orange),
                    new ThirdPlayer('1,8,2,4,7,16,23,32,33,25,24,17,11', green)
                ]
            }
        ]
    ),
    new Section(
        'B 12',
        [
            { players: 3, imgSrc: 'images/12.3.webp' },
            { players: 2, imgSrc: 'images/12.2.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,5,12,15,28,20,12,14,26,18,19,20,27'),
                    new SecondPlayer('1,8,2,4,7,16,23,32,33,25,34,25,24,17,11'),
                    new ThirdPlayer('1,9,3,6,10,22,31,36,35,29,34,29,30,21,13')
                ]
            },
            {
                playerPaths: [
                    new FirstPlayer('1,9,1,8,2,4,7,16,23,32,23,24,14,24,17,11', green),
                    new SecondPlayer('1,5,12,15,28,29,34,25,26,18,19,20,27', blue)
                ]
            }
        ]
    ),
    new Section(
        '13.09',
        [
            { players: 3, imgSrc: 'images/13.09.webp' }
        ],
        [
            {
                playerPaths: [
                    new FirstPlayer('1,3,8,9,13,7,16,21,26,30,31,42,34,36,39,44'),
                    new SecondPlayer('1,2,6,12,15,20,14,24,29,25,35,38,41,43,44'),
                    new ThirdPlayer('1,3,4,10,19,18,23,17,22,37,40,32,45,44')
                ]
            }
        ]
    ),
    new Section(
        '13.10',
        [
            { players: 3, imgSrc: 'images/13.10.webp' }
        ],
        []
    ),
    new Section(
        '13.11',
        [
            { players: 3, imgSrc: 'images/13.11.webp' }
        ],
        []
    ),
    new Section(
        '13.12',
        [
            { players: 3, imgSrc: 'images/13.12.3.webp' },
            { players: 2, imgSrc: 'images/13.12.2.webp' }
        ],
        []
    )
];

// Функции для создания UI компонентов
function createSectionItem(itemObj, pathObj) {
    const item = document.createElement('div');
    item.className = 'item';
    
    const playerCount = document.createElement('div');
    playerCount.textContent = 'Игроков: ' + itemObj.players;
    item.appendChild(playerCount);
    
    const image = document.createElement('img');
    image.src = itemObj.imgSrc;
    image.alt = 'Схема для ' + itemObj.players + ' игроков';
    image.loading = 'eager';
    item.appendChild(image);
    
    // Если есть пути для этой схемы, добавляем их ПОД картинкой
    if (pathObj && pathObj.playerPaths && pathObj.playerPaths.length > 0) {
        const pathsContainer = document.createElement('div');
        pathsContainer.className = 'paths-container';
        
        const pathsTitle = document.createElement('div');
        pathsTitle.textContent = 'Пути:';
        pathsTitle.className = 'paths-title';
        pathsContainer.appendChild(pathsTitle);
        
        const pathsList = document.createElement('ul');
        pathsList.className = 'paths-list';
        
        pathObj.playerPaths.forEach(playerPath => {
            const li = document.createElement('li');
            li.textContent = `${playerPath.name}: ${playerPath.path}`;
            li.setAttribute('data-value', playerPath.path);
            li.style.backgroundColor = playerPath.color;
            li.style.color = '#ffffff';
            li.style.padding = '8px 12px';
            li.style.margin = '4px 0';
            li.style.borderRadius = '4px';
            li.style.cursor = 'pointer';
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.alignItems = 'center';
            li.style.position = 'relative';
            li.style.transition = 'all 0.3s ease';
            
            const copySpan = document.createElement('span');
            copySpan.className = 'copy-icon';
            copySpan.textContent = '📋';
            copySpan.style.marginLeft = '8px';
            copySpan.style.fontSize = '14px';
            copySpan.style.transition = 'all 0.3s ease';
            
            li.appendChild(copySpan);
            pathsList.appendChild(li);
            
            // Сохраняем оригинальный цвет
            const originalColor = playerPath.color;
            const originalIcon = '📋';
            
            li.addEventListener('click', (e) => {
                e.stopPropagation();
                
                const value = li.dataset.value;
                navigator.clipboard.writeText(value).then(() => {
                    // Визуальная обратная связь - меняем на зеленый цвет и галочку
                    li.style.backgroundColor = '#27ae60';
                    copySpan.textContent = '✅';
                    li.style.transform = 'scale(0.98)';
                    
                    // Добавляем текст "Скопировано!" временно
                    const originalText = li.textContent;
                    li.textContent = 'Скопировано!';
                    li.style.justifyContent = 'center';
                    copySpan.style.display = 'none';
                    
                    // Восстанавливаем через 1.5 секунды
                    setTimeout(() => {
                        li.style.backgroundColor = originalColor;
                        li.textContent = originalText;
                        copySpan.textContent = originalIcon;
                        copySpan.style.display = 'inline';
                        li.style.justifyContent = 'space-between';
                        li.style.transform = 'scale(1)';
                    }, 1500);
                    
                }).catch(err => {
                    console.error('Ошибка копирования:', err);
                    
                    // Показываем ошибку
                    copySpan.textContent = '❌';
                    li.style.backgroundColor = '#e74c3c';
                    
                    setTimeout(() => {
                        copySpan.textContent = originalIcon;
                        li.style.backgroundColor = originalColor;
                    }, 2000);
                });
            });
            
            // Эффект при наведении
            li.addEventListener('mouseenter', () => {
                if (!li.classList.contains('copied')) {
                    li.style.transform = 'translateY(-2px)';
                    li.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                }
            });
            
            li.addEventListener('mouseleave', () => {
                if (!li.classList.contains('copied')) {
                    li.style.transform = 'translateY(0)';
                    li.style.boxShadow = 'none';
                }
            });
        });
        
        pathsContainer.appendChild(pathsList);
        item.appendChild(pathsContainer);
    }
    
    return item;
}

// Функция для создания схем
function createSchemesContainer() {
    const container = document.getElementById('schemes');
    if (!container) return;
    
    container.innerHTML = '';
    
    routeSections.forEach(section => {
        const h2 = document.createElement('h2');
        h2.textContent = `Приключение ${section.title}`;
        container.appendChild(h2);
        
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section';
        
        // Создаем каждый элемент с его путями
        section.items.forEach((itemObj, index) => {
            // Берем соответствующий путь для этой картинки
            const pathObj = section.paths[index] || null;
            sectionDiv.appendChild(createSectionItem(itemObj, pathObj));
        });
        
        container.appendChild(sectionDiv);
    });
}

// Вызываем создание схем после загрузки DOM
document.addEventListener('DOMContentLoaded', createSchemesContainer);