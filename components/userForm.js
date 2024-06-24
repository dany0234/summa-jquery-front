const UserForm = {
    render: function() {
        this.loadCSS();
        const userForm = `
            <form id="user-form-element">
                <input type="text" name="username" placeholder="שם משתמש" required>
                <input type="email" name="email" placeholder="אימייל" required>
                <input type="date" name="dob" placeholder="תאריך לידה" required>
                <input type="file" name="image" accept="image/*" required>
                <img id="image-preview" src="#" alt="תצוגה מקדימה" style="display:none; width: 100px; height: 100px;"/>
                <button type="submit">צור משתמש</button>
            </form>
        `;

        DOMUtils.clearElement('#user-form-container');
        DOMUtils.appendHTML('#user-form-container', userForm);
        $('#user-form-element').on('submit', this.handleFormSubmit.bind(this));
        $('#user-form-element input[name="image"]').on('change', this.handleImagePreview);
    },

    handleFormSubmit: function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        apiClient.createUser(formData).then(() => {
            UserForm.hide();
            UserList.render();
            UserForm.showNotification();
        }).catch(error => {
            console.error('Error creating user:', error);
        });
    },

    handleImagePreview: function(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                $('#image-preview').attr('src', e.target.result).show();
            };
            reader.readAsDataURL(input.files[0]);
        }
    },

    hide: function() {
        $('#user-form-container').hide();
        $('#user-list-container').show();
    },

    showNotification: function() {
        $('#notification').show().delay(3000).fadeOut();
    },

    loadCSS: function() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'styles/userForm.css';
        document.head.appendChild(link);
    }
};
