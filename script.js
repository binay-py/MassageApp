const data = {
  head_message: {
      titleHTML: "Head <span>Massage</span>",
      description: "A head massage, often referred to as a scalp massage, is a soothing and therapeutic practice that targets the head, scalp, neck, and shoulders. This specialized form of massage therapy is renowned for its unique ability to relieve tension, reduce stress, and enhance overall well-being. The head is a focal point for stress accumulation, as it harbors countless pressure points and is a repository of mental and emotional strain. A skilled therapist uses a variety of techniques, such as gentle circular motions, kneading, and acupressure, to stimulate blood circulation and relax the muscles of the head and neck. The use of essential oils, like lavender or peppermint, can further enhance the experience, providing a delightful sensory element.A head massage not only offers immediate relief from headaches and tight muscles but also has far-reaching benefits for mental health. As stress and anxiety often manifest as physical tension in the neck and shoulders, a head massage can act as a natural stress-reliever, promoting relaxation and clarity of thought. It's a tranquil escape from the hustle and bustle of daily life, allowing individuals to disconnect from their worries and find a moment of serenity. In addition to its mental and physical advantages, a head massage can also improve hair and scalp health, making it a comprehensive wellness practice that caters to the body and soul.",
      imageUrl: "./head.png",
  },
  hot_stone_message: {
      titleHTML: "Hot Stone <span>Massage</span>",
      description: "Hot stone massage is a luxurious and therapeutic bodywork practice that blends the soothing power of heated stones with skilled massage techniques. This specialized massage involves placing smooth, heated stones at key points on the body while a trained therapist incorporates them into a full-body or targeted massage. The heat from the stones helps to relax and warm the muscles, allowing the therapist to work more deeply and effectively to release tension and alleviate muscle aches. The stones, typically made of basalt, are carefully heated to a precise temperature, ensuring they provide comfort and relief rather than discomfort.Hot stone massage is celebrated for its ability to offer a wide range of benefits. The heat from the stones enhances blood circulation, promoting the flow of oxygen and nutrients to the muscles while aiding the body's natural healing processes. This not only eases physical discomfort but also reduces stress and anxiety. The combination of heat and skilled touch induces a deep sense of relaxation, making it an ideal choice for those seeking both physical and mental relief. The stones are often strategically placed along the body's energy centers, providing a balance of energy and a sense of harmony. Hot stone massage is a sensory experience, allowing the recipient to immerse themselves in the warmth and soothing touch, providing a unique and holistic wellness journey.",
      imageUrl: "/hot_stone.png",
  },
}

function showCardInfo(message_name) {
  const heading = document.getElementById('heading');
  heading.innerHTML = data[message_name].titleHTML;

  const description = document.getElementById('description');
  description.innerHTML = data[message_name].description;

  const imageUrl= data[message_name].imageUrl;
  
  description.style.backgroundImage = `url('${imageUrl}')`;
}

const loginLink = document.querySelector('.login');
const cardContainer = document.querySelector('.card-container');

function showCardContainer() {
cardContainer.style.display = 'block';
}

function hideCardContainer() {
cardContainer.style.display = 'none';
}

hideCardContainer();

loginLink.addEventListener('click', (event) => {
event.preventDefault();


if (cardContainer.style.display === 'none' || cardContainer.style.display === '') {
  showCardContainer();
} else {
  hideCardContainer();
}
});

document.addEventListener('click', (event) => {
if (event.target !== loginLink && event.target !== cardContainer) {
  hideCardContainer();
}
});