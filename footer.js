document.addEventListener('DOMContentLoaded', function() {
    const footer = `
    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h4 class="text-xl font-bold mb-4">UnclaimedFundsFindr</h4>
                    <p>Connecting you with your unclaimed funds.</p>
                </div>
                <div>
                    <h4 class="text-xl font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="/about-us" class="hover:text-green-400">About Us</a></li>
                        <li><a href="/reminder-signup" class="hover:text-green-400">Set Up Alerts</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl font-bold mb-4">Resources</h4>
                    <ul class="space-y-2">
                        <li><a href="https://missingmoney.com" class="hover:text-green-400">MissingMoney.com</a></li>
                        <li><a href="/states-resources" class="hover:text-green-400">State Websites</a></li>
                        <li><a href="/about-us#faq" class="hover:text-green-400">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl font-bold mb-4">Contact</h4>
                    <ul class="space-y-2">
                        <li>spr3adsh33t.bot@gmail.com.</li>
                        <li><a href="/privacy-policy" class="hover:text-green-400">Privacy Policy</a></li>
                        <li><a href="/terms-of-service" class="hover:text-green-400">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center">
                <p>&copy; ${new Date().getFullYear()} UnclaimedFundsFindr. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;

    // Create a placeholder div for the footer if it doesn't exist
    let footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) {
        footerPlaceholder = document.createElement('div');
        footerPlaceholder.id = 'footer-placeholder';
        document.body.appendChild(footerPlaceholder);
    }

    footerPlaceholder.innerHTML = footer;
});
