        function showPage(pageId) {
            document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
            document.querySelectorAll('.nav-bar a').forEach(link => link.classList.remove('active'));
            var target = document.getElementById(pageId);
            if (target) {
                target.classList.add('active');
                document.querySelector(`.nav-bar a[onclick="showPage('${pageId}')"]`).classList.add('active');
            }
        }
