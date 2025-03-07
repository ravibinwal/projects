function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    appendMessage('user', userInput);
    processMessage(userInput);

    document.getElementById('user-input').value = '';
}

function appendMessage(sender, message) {
    var chatBox = document.getElementById('chat-box');
    var chatBubble = document.createElement('div');
    chatBubble.classList.add('chat-bubble');
    chatBubble.classList.add(sender === 'bot' ? 'bot' : 'user');
    chatBubble.innerHTML = message; // Changed to innerHTML to allow buttons
    chatBox.appendChild(chatBubble);
    chatBox.scrollTop = chatBox.scrollHeight;
}

document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function processMessage(message) {
    var response = generateResponse(message);
    appendMessage('bot', response);
}

function generateResponse(message) {
    var response;
    switch (message.toLowerCase()) {b 
        case "what programs does the college offer ?":
        case 'programs':
        case 'program':
            response = 'Our college offers a variety of programs including Engineering ,business administration , arts,science and more. You can find detailed information about each program by typing or clicking these';
            break;
        case 'how can i apply to the college?':
            case 'apply':
            response = 'To apply to our college, you can visit our admissions page on the website. There, you\'ll find instructions on how to apply, application deadlines, and any required documents.';
            break;
        case 'can i schedule a campus tour?':
            case 'tour':
                case 'campus':
            response = 'Of course! We offer campus tours on weekdays and weekends. You can schedule a tour by visiting our campus tour page and selecting a date and time that works for you.';
            break;
        case 'what are the tuition fees? ':
            case 'fee':
                case 'fees':
                    case 'feees':
            response = 'Tuition fees vary depending on the program and whether you\'re an in-state or out-of-state student. You can find detailed information about tuition and fees on our financial aid page.';
            break;
        case 'are there any scholarships available?':
            case 'scholarship':
            response = 'Yes, we offer various scholarships for both incoming and current students. You can find information about scholarship opportunities and how to apply on our scholarships page.';
            break;
        case 'how can i contact the admissions office?':
            case 'contact':
            response = 'You can contact the admissions office by phone at 9899XXXXXX or by email at srcem@gmail.com. Our office hours are Monday to Friday, 9:00 AM to 5:00 PM.';
            break;
        case 'what extracurricular activities are available?':
            case 'activities':
            response = 'We offer a wide range of extracurricular activities including clubs, sports teams, volunteer opportunities, and more. You can explore our clubs and organizations page to see what interests you.';
            break;
        case 'is there on-campus housing available?':
            case 'housing':
                case 'hostel':
            response = 'Yes, we offer on-campus housing for students. You can find information about our residence halls, amenities, and how to apply for housing on our housing page.';
            break;
        case 'can i transfer credits from another college?':
            case 'credits':
                case 'transfer credit':
            response = 'Yes, we accept transfer credits from accredited institutions. You can find information about our transfer credit policies and how to transfer credits on our transfer admissions page.';
            break;
        case 'what support services are available for students?':
            case 'support':                
            response = 'We offer a variety of support services for students including academic advising, counseling services, tutoring, career services, and more. You can find information about our support services on our student resources page.';
            break;
        case 'help':
            response = 'You can select any from the following option.<br><br> <button onclick="selectOption(\'what programs does the college offer ?\')">Programs</button> <button onclick="selectOption(\'how can i apply to the college?\')">Apply</button>  <button onclick="selectOption(\'can i schedule a campus tour?\')">Tour</button><br><br><button onclick="selectOption(\'what are the tuition fees?\')">Fees</button>    <button onclick="selectOption(\'are there any scholarships available?\')">Scholarship</button>            <button onclick="selectOption(\'how can i contact the admissions office?\')">Contact</button><br><br>            <button onclick="selectOption(\'what extracurricular activities are available?\')">Activities</button>            <button onclick="selectOption(\'is there on-campus housing available?\')">Housing</button>            <button onclick="selectOption(\'can i transfer credits from another college?\')">Credit</button><br><br>            <button onclick="selectOption(\'what support services are available for students?\')">Support</button>';
            break;
        default:
            response = 'I\'m sorry, I didn\'t understand that. Type "help" for assistance.';
            break;
    }
    return response;
}

function selectOption(option) {
    document.getElementById('user-input').value = option;
    // sendMessage();
}
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}
