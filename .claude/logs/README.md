# Görev Logları

Her görev bir klasörde loglanır. Format:

```
.claude/logs/YYYY-MM-DD_task-name/
├── 01_pm-plan.md           (PM'in görev planı, kabul kriterleri)
├── 02_fullstack-output.md  (yazılan kod, branch, commits)
├── 03_qa-report.md         (test sonuçları, review bulgular)
└── summary.md              (genel özeti, final status)
```

## Dosya İçerikleri

### 01_pm-plan.md
```markdown
# PM Planı: [Görev Adı]
**Tarih:** 2026-03-13
**Kullanıcı İsteği:** [orijinal istek]

## Görev Listesi
- [ ] Görev 1 (P0) — açıklama
- [ ] Görev 2 (P1) — açıklama

## Kabul Kriterleri
- [ ] Kriter 1
- [ ] Kriter 2
```

### 02_fullstack-output.md
```markdown
# Full Stack Çıktısı: [Görev Adı]
**Branch:** feature/something
**Commits:**
- abc123 feat(api): add login endpoint
- def456 feat(ui): add login form

**Dosyalar:**
- src/api/auth.ts
- src/pages/login.tsx
- tests/auth.test.ts
```

### 03_qa-report.md
```markdown
# QA Raporu: [Görev Adı]
**Status:** ✅ PASSED / ❌ FAILED

## Test Sonuçları
- Tüm testler geçti: 10/10

## Review Bulgular
- Kod standartlara uygun
- Hata handling iyi
- 1 minör stil önerisi: [...]

## Sorunlar (varsa)
- Sorun 1 — dosya:satır — açıklama
```

### summary.md
```markdown
# Özet: [Görev Adı]
**Tarih:** 2026-03-13
**Status:** ✅ Tamamlandı
**Tur Sayısı:** 1 (ilk turda geçti)

**Ne yapıldı:**
- Login sayfası eklendi
- Backend endpoint'i yazıldı
- Testler yazıldı

**Sorunlar (varsa):**
- Sorun 1 ve çözümü
```

## Erişim

Yeni session'da:
```bash
# Son görevleri görmek için
ls -la .claude/logs/ | tail -5

# Belirli görevin logu okumak için
cat .claude/logs/2026-03-13_feature-login/summary.md
```
