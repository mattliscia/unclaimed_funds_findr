document.addEventListener('DOMContentLoaded', function() {
    const headerHtml = `
        <nav class="bg-white shadow-md">
            <div class="container mx-auto px-6 py-4">
                <div class="flex justify-between items-center">
                    <a href="index.html" class="text-2xl font-bold text-green-600">MyFundsFinder</a>
                    <div class="space-x-6">
                        <a href="reminder-signup.html" class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
                            Set Up Alerts
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    `;
    
    const header = document.getElementById('header-placeholder');
    if (header) {
        header.innerHTML = headerHtml;
    }
});