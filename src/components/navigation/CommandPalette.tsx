import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Moon,
  Sun,
  Copy,
  Check,
  ExternalLink,
  Compass,
  Code2,
  Sparkles,
  User,
  Mail,
  FolderGit2,
  Bot,
  Gauge,
  CornerDownLeft,
  X,
  BookOpen,
  ArrowUp,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useRouter } from '@/hooks/useRouter';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { siteIdentity } from '@/config/identity';
import { cn } from '@/utils/cn';

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  label: string;
  category: 'Navigation' | 'Projects' | 'Actions' | 'Social Links';
  keywords: string[];
  shortcut?: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  perform: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const prefersReduced = useReducedMotion();
  const { resolvedTheme, toggleTheme } = useTheme();
  const { navigate } = useRouter();

  const isDark = resolvedTheme === 'dark';

  const scrollToSection = useCallback(
    (sectionId: string) => {
      onClose();
      navigate('/#' + sectionId);
    },
    [navigate, onClose]
  );

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(siteIdentity.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1000);
    } catch {
      onClose();
    }
  }, [onClose]);

  const allCommands: CommandItem[] = useMemo(
    () => [
      // Navigation
      {
        id: 'nav-work',
        label: 'Work (Selected Projects)',
        category: 'Navigation',
        keywords: ['work', 'projects', 'featured', 'portfolio', 'sured', 'walle', 'jalsanchaee'],
        icon: FolderGit2,
        perform: () => scrollToSection('projects'),
      },
      {
        id: 'nav-journey',
        label: 'Journey (Evolution & Milestones)',
        category: 'Navigation',
        keywords: ['journey', 'timeline', 'history', 'evolution', 'milestones', 'roots', 'hardware', 'walle', 'discovery'],
        icon: Compass,
        perform: () => scrollToSection('journey'),
      },
      {
        id: 'nav-toolbox',
        label: 'Toolbox (Technical Index & Skills)',
        category: 'Navigation',
        keywords: ['toolbox', 'skills', 'languages', 'frameworks', 'technologies', 'stack', 'cpp', 'react', 'rust'],
        icon: Code2,
        perform: () => scrollToSection('toolbox'),
      },
      {
        id: 'nav-exploration',
        label: 'Exploring (Active Research Frontiers)',
        category: 'Navigation',
        keywords: ['exploring', 'research', 'ai', 'systems', 'cybersecurity', 'web3', 'tooling'],
        icon: Sparkles,
        perform: () => scrollToSection('exploration'),
      },
      {
        id: 'nav-about',
        label: 'About (Background & Mindset)',
        category: 'Navigation',
        keywords: ['about', 'bio', 'who', 'mindset', 'background', 'pune', 'football', 'anime', 'music'],
        icon: User,
        perform: () => scrollToSection('about'),
      },
      {
        id: 'nav-contact',
        label: "Contact (Let's Build)",
        category: 'Navigation',
        keywords: ['contact', 'email', 'touch', 'hire', 'reach', 'message'],
        icon: Mail,
        perform: () => scrollToSection('contact'),
      },



      // Projects (Case Studies)
      {
        id: 'case-sured',
        label: 'SureD — Case Study (Stellar Escrow Protocol)',
        category: 'Projects',
        keywords: ['sured', 'stellar', 'soroban', 'escrow', 'blockchain', 'web3', 'rust', 'freighter', 'deposit'],
        icon: BookOpen,
        perform: () => {
          onClose();
          navigate('/work/sured');
        },
      },
      {
        id: 'case-walle',
        label: 'WALL-E — Case Study (Obstacle Avoiding Robot)',
        category: 'Projects',
        keywords: ['walle', 'robot', 'robotics', 'arduino', 'hardware', 'embedded', 'c++', 'ultrasonic', 'sensors'],
        icon: Bot,
        perform: () => {
          onClose();
          navigate('/work/wall-e');
        },
      },
      {
        id: 'case-jalsanchaee',
        label: 'JalSanchaeeNavachar — Case Study (Techathon 3.0)',
        category: 'Projects',
        keywords: ['jalsanchaee', 'navachar', 'water', 'iot', 'telemetry', 'hackathon', 'aissms', 'conservation'],
        icon: Gauge,
        perform: () => {
          onClose();
          navigate('/work/jalsanchaeenavachar');
        },
      },

      // Actions
      {
        id: 'action-theme',
        label: `Switch to ${isDark ? 'Light' : 'Dark'} Theme`,
        category: 'Actions',
        keywords: ['theme', 'dark', 'light', 'mode', 'toggle', 'color'],
        shortcut: 'T',
        icon: isDark ? Sun : Moon,
        perform: () => {
          toggleTheme();
          onClose();
        },
      },
      {
        id: 'action-copy-email',
        label: copied ? 'Email Copied!' : `Copy Email (${siteIdentity.email})`,
        category: 'Actions',
        keywords: ['email', 'copy', 'mail', 'contact', 'address'],
        shortcut: 'C',
        icon: copied ? Check : Copy,
        perform: copyEmail,
      },
      {
        id: 'action-top',
        label: 'Back to Top',
        category: 'Actions',
        keywords: ['top', 'scroll', 'up', 'start', 'beginning'],
        icon: ArrowUp,
        perform: () => {
          window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
          onClose();
        },
      },

      // Social Links
      {
        id: 'link-github',
        label: 'Open GitHub (@omjoshi-2307)',
        category: 'Social Links',
        keywords: ['github', 'code', 'repos', 'git', 'profile'],
        icon: ExternalLink,
        perform: () => {
          window.open(siteIdentity.socials.github, '_blank', 'noopener,noreferrer');
          onClose();
        },
      },
      {
        id: 'link-linkedin',
        label: 'Open LinkedIn (Om Joshi)',
        category: 'Social Links',
        keywords: ['linkedin', 'connect', 'career', 'network', 'profile'],
        icon: ExternalLink,
        perform: () => {
          window.open(siteIdentity.socials.linkedin, '_blank', 'noopener,noreferrer');
          onClose();
        },
      },
      {
        id: 'link-x',
        label: 'Open X / Twitter (@omjoshi_2307)',
        category: 'Social Links',
        keywords: ['x', 'twitter', 'social', 'posts', 'tweets'],
        icon: ExternalLink,
        perform: () => {
          window.open(siteIdentity.socials.x, '_blank', 'noopener,noreferrer');
          onClose();
        },
      },
    ],
    [isDark, copied, navigate, onClose, scrollToSection, toggleTheme, copyEmail, prefersReduced]
  );

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return allCommands;
    const q = query.toLowerCase().trim();
    return allCommands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(q) ||
        cmd.category.toLowerCase().includes(q) ||
        cmd.keywords.some((k) => k.includes(q))
    );
  }, [query, allCommands]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input and lock body scroll on open
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      return;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Keyboard navigation inside modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].perform();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
          className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] sm:pt-[14vh] px-4"
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 bg-background/80 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -8 }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-xl border border-border bg-card shadow-elevated overflow-hidden z-10 flex flex-col"
          >
            {/* Top Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-elevated/60">
              <Search className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded={isOpen}
                aria-autocomplete="list"
                aria-controls="command-palette-list"
                aria-activedescendant={filteredCommands[selectedIndex]?.id}
                aria-label="Search or type a command"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search or type a command..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-subtle focus:outline-none font-sans"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search query"
                  className="p-1 rounded text-muted-subtle hover:text-foreground transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              )}
              <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-muted-subtle bg-surface px-2 py-0.5 rounded border border-border" aria-hidden="true">
                <span>ESC</span>
              </div>
            </div>

            {/* Commands List */}
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-muted-subtle">
                  No matching commands found.
                </div>
              ) : (
                <ul
                  id="command-palette-list"
                  ref={listRef}
                  role="listbox"
                  aria-label="Commands"
                  className="space-y-1"
                >
                  {filteredCommands.map((cmd, index) => {
                    const isSelected = index === selectedIndex;
                    const Icon = cmd.icon;

                    return (
                      <li
                        key={cmd.id}
                        id={cmd.id}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => cmd.perform()}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={cn(
                          'flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-xs transition-colors duration-100 cursor-pointer select-none',
                          isSelected
                            ? 'bg-accent-soft text-foreground font-semibold border-l-2 border-accent'
                            : 'text-muted-foreground hover:bg-elevated hover:text-foreground'
                        )}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={cn(
                              'w-6 h-6 rounded-sm flex items-center justify-center shrink-0 transition-colors',
                              isSelected
                                ? 'bg-accent text-accent-foreground shadow-subtle'
                                : 'bg-elevated text-muted-foreground border border-border'
                            )}
                          >
                            <Icon className="w-3.5 h-3.5" aria-hidden={true} />
                          </span>
                          <span className="truncate font-sans text-sm">{cmd.label}</span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 font-mono text-[10px]">
                          <span className="text-muted-subtle uppercase tracking-widest hidden sm:inline" aria-hidden="true">
                            {cmd.category}
                          </span>
                          {isSelected && (
                            <CornerDownLeft className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Bottom Footer Info */}
            <div className="px-4 py-2 border-t border-border bg-elevated/40 flex items-center justify-between text-[11px] font-mono text-muted-subtle" aria-hidden="true">
              <div className="flex items-center gap-2">
                <span>Navigate</span>
                <span className="px-1.5 py-0.5 rounded bg-surface border border-border text-[9px]">↑↓</span>
                <span>Select</span>
                <span className="px-1.5 py-0.5 rounded bg-surface border border-border text-[9px]">↵</span>
              </div>
              <span className="text-accent font-semibold tracking-wider text-[10px]">OM JOSHI // PALETTE</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

