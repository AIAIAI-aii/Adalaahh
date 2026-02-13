        let loveCount = 0;
        let mainCandleLit = true;
        let candleLit = true;
        const emojis = ['😍', '🥰', '😘', '💕', '💖', '💗', '💙', '💝', '🎉', '🎊'];
        let currentEmojiIndex = 0;
        let musicPlaying = false;
        const bgMusic = document.getElementById('bgMusic');

        // Setup musik dengan URL yang lebih reliable 
        bgMusic.src = 'https://www.bensound.com/bensound-music/bensound-love.mp3';
        
        // Toggle musik
        function toggleMusic() {
            const musicIcon = document.getElementById('musicIcon');
            const musicText = document.getElementById('musicText');
            
            if (musicPlaying) {
                bgMusic.pause();
                musicIcon.textContent = '🔇';
                musicText.textContent = 'Musik: OFF';
                musicPlaying = false;
            } else {
                bgMusic.play().catch(e => console.log('Audio play failed:', e));
                musicIcon.textContent = '🔊';
                musicText.textContent = 'Musik: ON';
                musicPlaying = true;
            }
        }

        // Buat bintang
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }

        // Buka surat
        function openLetter() {
            createConfetti(50);
            playMusicVisual();
            
            // Auto play musik saat buka
            bgMusic.play().then(() => {
                musicPlaying = true;
                document.getElementById('musicIcon').textContent = '🔊';
                document.getElementById('musicText').textContent = 'Musik: ON';
            }).catch(e => {
                console.log('Audio autoplay blocked, user can enable manually');
            });
            
            setTimeout(() => {
                document.getElementById('introScreen').classList.add('hidden');
                document.getElementById('mainContent').classList.remove('hidden');
            }, 300);
        }

        // Tiup lilin kue utama
        function blowCakeCandle() {
            const candle = document.getElementById('mainCandle');
            if (mainCandleLit) {
                candle.style.opacity = '0';
                mainCandleLit = false;
                createConfetti(150);
                playMusicVisual();
                
                setTimeout(() => {
                    alert('🎉 Yeay! Harapan byy pasti terkabul! Selamat ulang tahun sayang! 💙✨');
                }, 500);
            } else {
                candle.style.opacity = '1';
                mainCandleLit = true;
                alert('🕯️ Lilin idupp agi! Mau tiup agii? 😊');
            }
        }

        // Kirim cinta
        function spreadLove() {
            loveCount++;
            document.getElementById('loveCounter').textContent = loveCount;
            createFloatingHeart();
            playMusicVisual();

            if (loveCount % 10 === 0) {
                createConfetti(30);
                alert(`💙 Wow! ${loveCount} cinta sudah terkirim! Anaaa sayang byyy! 💙`);
            }
        }

        // Tiup lilin
        function blowCandle() {
            const candle = document.getElementById('candle');
            if (candleLit) {
                candle.style.opacity = '0';
                candleLit = false;
                createConfetti(100);
                setTimeout(() => {
                    alert('🎉 Harapan byyy sudah terkabul! Selamat ulang tahun sayaaang! 💙');
                }, 500);
            } else {
                candle.style.opacity = '1';
                candleLit = true;
            }
        }

        // Tampilkan harapan
        function showWishes() {
            document.getElementById('wishesPopup').classList.add('show');
            createConfetti(30);
            playMusicVisual();
        }

        // Tutup popup harapan
        function closeWishesPopup() {
            document.getElementById('wishesPopup').classList.remove('show');
        }

        // Jawab kuis
        function answerQuiz(answer) {
            const result = document.getElementById('quizResult');
            if (answer === 3 || answer === 4) {
                result.textContent = '✅ Yeeayy btuul! Anaa yang paling sayang! 💙💙💙';
                createConfetti(80);
                playMusicVisual();
            } else {
                result.textContent = '❌ Hmmmmm, apaaalah, coba pilih yang lain... 😊';
            }
        }

        // Tutup popup saat klik di luar
        document.getElementById('wishesPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                closeWishesPopup();
            }
        });

        document.getElementById('quizPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                closeQuizPopup();
            }
        });

        // Klik kue
        function cakeClick() {
            createConfetti(30);
            playMusicVisual();
        }

        // Ganti emoji
        function changeEmoji() {
            currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
            document.getElementById('emoji').textContent = emojis[currentEmojiIndex];
            createConfetti(15);
        }

        // Buat confetti
        function createConfetti(count) {
            const colors = ['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#fbbf24', '#f59e0b', '#ff6b9d'];
            for (let i = 0; i < count; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                    document.body.appendChild(confetti);

                    setTimeout(() => confetti.remove(), 3000);
                }, i * 30);
            }
        }

        // Buat hati terbang
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'floating-hearts';
            heart.innerHTML = '💙';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 8000);
        }

        // Musik visual
        function playMusicVisual() {
            const notes = ['🎵', '🎶', '🎼', '🎹'];
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const note = document.createElement('div');
                    note.className = 'music-note';
                    note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
                    note.style.left = Math.random() * 100 + '%';
                    note.style.top = Math.random() * 50 + 50 + '%';
                    document.body.appendChild(note);

                    setTimeout(() => note.remove(), 4000);
                }, i * 200);
            }
        }

        // Auto floating hearts
        setInterval(createFloatingHeart, 3000);