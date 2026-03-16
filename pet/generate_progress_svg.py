#!/usr/bin/env python3
"""Generate a markdown image line with a data-uri SVG progress chart.
Usage: python generate_progress_svg.py 6 7 8 9
Outputs: markdown image line to copy into your markdown file.
"""
import sys

def to_svg(scores):
    chart = [float(s) for s in scores]
    max_score = 10
    width = max(480, 80 + len(chart) * 110)
    height = 240
    margin = 20
    bar_max_height = 130
    bar_width = 60
    gap = 20
    svg = [
        '<svg xmlns="http://www.w3.org/2000/svg" width="{}" height="{}">'.format(width, height),
        '<rect width="{}" height="{}" fill="#fff8df" stroke="#f0d880" stroke-width="1" rx="10"/>'.format(width, height),
        '<text x="16" y="28" fill="#333" font-size="18" font-weight="700">Progress chart</text>',
    ]
    baseline_y = 180
    svg.append('<line x1="{}" y1="{}" x2="{}" y2="{}" stroke="#999" stroke-dasharray="3,2"/>'.format(margin, baseline_y, width-margin, baseline_y))
    for i, score in enumerate(chart):
        x = margin + i * (bar_width + gap)
        h = int((score / max_score) * bar_max_height)
        y = baseline_y - h
        label = 'Test {}'.format(i+1)
        display_score = '{:.2f}'.format(score).rstrip('0').rstrip('.')
        svg.append('<rect x="{}" y="{}" width="{}" height="{}" fill="#4b83ff" rx="5"/>'.format(x, y, bar_width, h))
        svg.append('<text x="{}" y="{}" font-size="12" text-anchor="middle" fill="#0d2f66">{}/10</text>'.format(x + bar_width/2, y-6, display_score))
        svg.append('<text x="{}" y="{}" font-size="12" text-anchor="middle" fill="#333">{}</text>'.format(x + bar_width/2, baseline_y + 24, label))
    svg.append('</svg>')
    return ''.join(svg)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python generate_progress_svg.py <score1> <score2> ...')
        sys.exit(1)
    scores = sys.argv[1:]
    svg_text = to_svg(scores)
    out_path = 'pet/media/progress.svg'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(svg_text)
    print('Updated {}'.format(out_path))
    print('Use this markdown line:')
    print('![Progress chart](media/progress.svg)')
