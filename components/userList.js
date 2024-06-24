const UserList = {
    usersCache: [],

    render: function () {
        this.loadCSS();
        apiClient.fetchUsers().then(users => {
            this.usersCache = users;  // Cache the fetched users
            DOMUtils.clearElement('#user-list-container');
            const userList = `
                <table>
                    <thead>
                        <tr>
                            <th>תמונה</th>
                            <th>שם משתמש</th>
                            <th>אימייל</th>
                            <th>תאריך לידה</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map(user => `
                            <tr class="user-row" data-id="${user.id}">
                                <td>${user.username}</td>
                                <td>${user.email}</td>
                                <td>${new Date(user.dateOfBirth).toLocaleDateString('he-IL')}</td>
                                <td><img class="user-image" src="${user.image}" alt="User Image"></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;

            DOMUtils.appendHTML('#user-list-container', userList);
            $('.user-row').on('click', this.handleRowClick.bind(this));
        }).catch(error => {
            console.error('Error fetching users:', error);
        });
    },

    handleRowClick: function (event) {
        const userId = $(event.currentTarget).data('id');
        const user = this.usersCache.find(u => u.id === userId);  // Use the cached users
        if (user) {
            UserDetails.render(user);
            UserList.hide();
        }
    },

    hide: function () {
        $('#user-list-container').hide();
        $('#user-details-container').show();
    },

    loadCSS: function () {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'styles/userList.css';
        document.head.appendChild(link);
    }
};
