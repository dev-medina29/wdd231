// Get URL parameters from the form submission
const params = new URLSearchParams(document.location.search);

// Extract form data
const firstName = params.get('firstName') || 'Not provided';
const lastName = params.get('lastName') || 'Not provided';
const email = params.get('email') || 'Not provided';
const mobile = params.get('mobile') || 'Not provided';
const organization = params.get('organization') || 'Not provided';
const membership = params.get('membership') || 'Not provided';
const timestamp = params.get('timestamp') || 'Not provided';

// Display form data on the page
document.getElementById('display-firstName').textContent = firstName;
document.getElementById('display-lastName').textContent = lastName;
document.getElementById('display-email').textContent = email;
document.getElementById('display-mobile').textContent = mobile;
document.getElementById('display-organization').textContent = organization;

// Format membership level display
const membershipMap = {
    'np': 'NP Membership (Non-Profit)',
    'bronze': 'Bronze Membership',
    'silver': 'Silver Membership',
    'gold': 'Gold Membership'
};
document.getElementById('display-membership').textContent = membershipMap[membership] || membership;

// Display timestamp
document.getElementById('display-timestamp').textContent = timestamp;
