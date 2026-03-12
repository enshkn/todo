# Iş Akışı Kurtarma Rehberi

Session'dan sonra çalışmaya kaldığın yerden devam et.

## Adım 1: Nerede kaldığını görmek

```bash
# Son görevleri listele
ls -la .claude/logs/ | tail -5

# Belirli görevin özeti oku
cat .claude/logs/2026-03-13_feature-login/summary.md
```

## Adım 2: Status'u anlamak

Açtığın `summary.md`'de bak:

- **Status: ✅ Tamamlandı** → görev bitti, yeni görev başlat
- **Status: ❌ Başarısız, Full Stack geri gitti** → QA raporundaki hataları oku, Full Stack'e söyle
- **Status: ⏸ 2 tur sonra kaydedildi, Tur 3'e gitmek mi?** → Orchestrator'a sor

## Adım 3: Bağlamı geri yükle

```bash
# Plan dosyasını oku
cat .claude/logs/2026-03-13_feature-login/01_pm-plan.md

# Yazılan kodları / commits'leri görmek için
cat .claude/logs/2026-03-13_feature-login/02_fullstack-output.md

# Sorunları görmek için
cat .claude/logs/2026-03-13_feature-login/03_qa-report.md
```

## Adım 4: Devam Et

### Senaryo A: Görev tamamlandı
```
Orchestrator'a:
"Yeni görev: [açıklama]"
```

### Senaryo B: QA başarısız oldu
```
Orchestrator'a:
"Daha önceki görevde (2026-03-13_feature-login) sorunlar çıktı:
- Sorun 1
- Sorun 2

Bunları düzeltmek istiyorum"
```

### Senaryo C: 2 tur yapıldı ama hâlâ çözülemediyse
```
Orchestrator'a:
".claude/logs/2026-03-13_feature-login/summary.md'de
2 tur sonra başarısız kaldı. Ne yapmalıyız?"
```

## Kısaca

| Durumda | Ne yapmalısın |
|---|---|
| Görev tamamlandı | Yeni görev başlat |
| QA başarısız (tur 1) | Sorunları Orchestrator'a söyle |
| QA başarısız (tur 2) | Sorunları ve full logu Orchestrator'a göster |
| 2 turdan sonra hâlâ başarısız | Orchestrator'dan karar ver |
