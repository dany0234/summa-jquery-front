const UserDetails = {
    render: function(user) {
        this.loadCSS();
        const userDetails = `
            <div class="user-details">
                <img src="${user.image}" alt="User Image" width="100" height="100">
                <div>שם משתמש: ${user.username}</div>
                <div>אימייל: ${user.email}</div>
                <div>תאריך לידה: ${new Date(user.dateOfBirth).toLocaleDateString('he-IL')}</div>
                <button id="back-to-list">חזרה לרשימה</button>
            </div>
        `;

        DOMUtils.clearElement('#user-details-container');
        DOMUtils.appendHTML('#user-details-container', userDetails);
        $('#back-to-list').on('click', this.handleBackClick.bind(this));
    },

    handleBackClick: function() {
        UserDetails.hide();
        UserList.render();
    },

    hide: function() {
        $('#user-details-container').hide();
        $('#user-list-container').show();
    },

    loadCSS: function() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'styles/userDetails.css';
        document.head.appendChild(link);
    }
};
