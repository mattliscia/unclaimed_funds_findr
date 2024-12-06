document.addEventListener('DOMContentLoaded', function() {
    const headerHtml = `
        <nav class="bg-white shadow-md">
            <div class="container mx-auto px-6 py-4">
                <div class="flex justify-between items-center">
                    <a href="index.html" class="flex items-center">
                        <img src="/images/icon-nobg.png" alt="UnclaimedFundsFindr Logo" class="rounded h-8 w-8">
                        <span class="hidden md:block text-2xl font-bold text-green-600 ml-2">UnclaimedFundsFindr</span>
                    </a>
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