document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. Smooth Scrolling & Active State for Header Navigation
    // --------------------------------------------------------------------------
    const navLinks = document.querySelectorAll('.navi-bar a[href^="#"]');
    const sections = document.querySelectorAll('.dashboard-card');

    // Smooth scroll to card when clicking nav link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });

    // Highlight active link in header on scroll
    const highlightNavOnScroll = () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 200; // Offset for sticky header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = `#${section.id}`;
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentSectionId) {
                link.style.backgroundColor = '#BCE7D0';
                link.style.color = '#1e2e25';
            } else {
                link.style.backgroundColor = 'transparent';
                link.style.color = '#3b5547';
            }
        });
    };

    window.addEventListener('scroll', highlightNavOnScroll);

    // --------------------------------------------------------------------------
    // 2. Interactive To-Do Card Quick Task Tracker
    // --------------------------------------------------------------------------
    const todoCard = document.querySelector('#todo');
    if (todoCard) {
        // Create an interactive quick-add mini task list inside the To-Do card
        const miniTodoList = document.createElement('div');
        miniTodoList.className = 'mini-todo-container';
        miniTodoList.style.cssText = `
            margin-top: 15px;
            width: 100%;
            text-align: left;
            background: rgba(255, 255, 255, 0.2);
            padding: 10px;
            border-radius: 6px;
        `;

        miniTodoList.innerHTML = `
            <div style="display: flex; gap: 5px; margin-bottom: 8px;">
                <input type="text" id="quick-task-input" placeholder="Quick task..." 
                       style="flex: 1; padding: 4px 8px; border: 1px solid #3b5547; border-radius: 4px; font-family: inherit;">
                <button id="add-task-btn" 
                        style="padding: 4px 8px; background: #3b5547; color: #BCE7D0; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">+</button>
            </div>
            <ul id="quick-task-list" style="list-style: none; padding: 0; font-size: 0.85rem;"></ul>
        `;

        // Insert before the action button
        const todoButton = todoCard.querySelector('.button');
        todoCard.insertBefore(miniTodoList, todoButton);

        const taskInput = document.getElementById('quick-task-input');
        const addTaskBtn = document.getElementById('add-task-btn');
        const taskList = document.getElementById('quick-task-list');

        const addTask = () => {
            const taskText = taskInput.value.trim();
            if (!taskText) return;

            const li = document.createElement('li');
            li.style.cssText = 'display: flex; align-items: center; gap: 6px; margin-bottom: 4px; cursor: pointer;';
            li.innerHTML = `<input type="checkbox" style="cursor: pointer;"> <span>${taskText}</span>`;

            // Toggle task completion
            const checkbox = li.querySelector('input');
            checkbox.addEventListener('change', () => {
                const span = li.querySelector('span');
                span.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
                span.style.opacity = checkbox.checked ? '0.6' : '1';
            });

            taskList.appendChild(li);
            taskInput.value = '';
        };

        addTaskBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTask();
        });
    }

    // --------------------------------------------------------------------------
    // 3. Make Entire Dashboard Cards Clickable
    // --------------------------------------------------------------------------
    sections.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            // Prevent double trigger if clicking directly on input/button elements inside
            if (['A', 'BUTTON', 'INPUT'].includes(e.target.tagName)) return;

            const buttonLink = card.querySelector('.button');
            if (buttonLink) {
                window.location.href = buttonLink.getAttribute('href');
            }
        });
    });
});